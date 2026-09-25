// PLAYWRIGHT_MODULE=/caminho/para/playwright/index.mjs CHROME_PATH=/caminho/chromium node scripts/probe-jornada-browser.mjs
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import { performance } from 'node:perf_hooks';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = resolve(import.meta.dirname, '..');
const server = createServer(async (req, res) => {
  const path = resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
  if (!path.startsWith(root + '/')) { res.writeHead(403).end(); return; }
  try { const data = await readFile(path); res.setHeader('Content-Type', ({'.html':'text/html','.mjs':'text/javascript','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'})[extname(path)] || 'text/plain'); res.end(data); }
  catch { res.writeHead(404).end(); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH, headless: true, args: ['--disable-gpu', '--disable-software-rasterizer', '--enable-features=WebMCP'] });
const report = { date: new Date().toISOString(), browser: browser.version(), flags: ['disable-gpu', 'disable-software-rasterizer', 'enable-features=WebMCP'], method: 'Controles automatizados versus callbacks locais; sem modelo de IA ou medição de tokens.', trials: [] };
try {
  for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    // Feature detection sem suporte precisa preservar a jornada.
    await page.addInitScript(() => Object.defineProperty(document, 'modelContext', { value: undefined, configurable: true }));
    await page.goto(origin + '/labs/jornada-estudos.html', { waitUntil: 'networkidle' });
    await page.waitForFunction(() => document.querySelector('#journey-native').textContent.includes('indisponível'));
    const start = performance.now();
    await page.locator('#journey-theme').fill('agentes');
    await page.locator('#journey-level').selectOption('iniciante');
    await page.locator('#journey-search button').click();
    await page.locator('[data-course-id="a1"]').click();
    await page.locator('[data-course-id="a2"]').click();
    const controlsMs = performance.now() - start;
    const manual = await page.locator('#journey-list').textContent();
    await page.locator('#journey-reset').click();
    const directStart = performance.now(); await page.locator('#journey-run').click();
    await page.waitForFunction(() => document.querySelectorAll('#journey-trace li').length === 4);
    const callbacksMs = performance.now() - directStart;
    assert.equal(await page.locator('#journey-list').textContent(), manual);
    assert.equal(await page.locator('#journey-results li').count(), 2);
    await page.locator('#journey-run').click(); assert.equal(await page.locator('#journey-list').textContent(), manual);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: `/tmp/webmcp-jornada-${width}.png`, fullPage: true });
    report.trials.push({ width, controlsMs, callbacksMs, finalList: manual, equivalent: true, repeatedWithoutDuplicates: true, errors });
    assert.deepEqual(errors, []); await page.close();
  }
  // Exercício controlado da API real, quando disponível nesta versão.
  const nativePage = await browser.newPage();
  await nativePage.goto(origin + '/labs/jornada-estudos.html', { waitUntil: 'networkidle' });
  report.native = await nativePage.evaluate(async () => {
    const mc = document.modelContext;
    if (!mc?.getTools || !mc?.executeTool) return { available: false, status: document.querySelector('#journey-native').textContent };
    const tools = await mc.getTools();
    const run = async (name, input) => {
      const result = await mc.executeTool(tools.find(t => t.name === name), JSON.stringify(input));
      return typeof result === 'string' ? JSON.parse(result) : result;
    };
    const result = await run('buscar_cursos', { tema: 'agentes', nivel: 'iniciante' });
    const filtered = await run('filtrar_cursos', { ids: result.cursos.map(c => c.id), somenteGratuitos: true });
    await run('adicionar_estudos', { ids: filtered.cursos.map(c => c.id) });
    const final = await run('consultar_jornada', {});
    return { available: true, inputTransport: 'JSON serializado, exigido por esta implementação experimental', names: tools.map(t => t.name), final, visibleList: document.querySelector('#journey-list').textContent };
  });
  if (report.native.available) assert.deepEqual(report.native.final.lista, ['a1', 'a2']);
  await nativePage.close();
  // Stub explicitamente identificado: valida teardown e rollback de registro.
  const stubPage = await browser.newPage();
  await stubPage.addInitScript(() => {
    window.registered = [];
    Object.defineProperty(document, 'modelContext', { value: { registerTool: async (tool, options) => { window.registered.push({ name: tool.name, signal: options.signal }); } } });
  });
  await stubPage.goto(origin + '/labs/jornada-estudos.html', { waitUntil: 'networkidle' });
  assert.equal(await stubPage.evaluate(() => window.registered.length), 4);
  assert.equal(await stubPage.evaluate(() => { window.dispatchEvent(new PageTransitionEvent('pagehide')); return window.registered.every(t => t.signal.aborted); }), true);
  await stubPage.close();
  const failPage = await browser.newPage();
  await failPage.addInitScript(() => {
    window.signals = []; Object.defineProperty(document, 'modelContext', { value: { registerTool: async (tool, options) => { window.signals.push(options.signal); if (window.signals.length === 2) throw new Error('falha simulada'); } } });
  });
  await failPage.goto(origin + '/labs/jornada-estudos.html', { waitUntil: 'networkidle' });
  assert.equal(await failPage.evaluate(() => window.signals.length === 2 && window.signals.every(s => s.aborted)), true);
  await failPage.locator('#journey-run').click();
  assert.ok((await failPage.locator('#journey-message').textContent()).includes('concluída'));
  await failPage.close();
  const validator = await browser.newPage();
  await validator.goto(origin + '/labs/validador-tools.html', { waitUntil: 'networkidle' });
  for (const [annotations, expected] of [[{consequentialHint: true, debugging: false}, 'Ação consequente sem confirmação documentada'], [{debugging:'true'}, 'Annotations inválidas'], [undefined, 'Annotations opcionais ausentes']]) {
    await validator.locator('#catalog-input').fill(JSON.stringify([{ name: 'teste_acao', description: 'Consulta o estado atual sem alterar registros.', annotations }]));
    await validator.locator('#run-validator').click();
    assert.ok((await validator.locator('#findings').textContent()).includes(expected));
  }
  await validator.close();
  report.integration = { stubLifecycle: 'pass', partialRegistrationRollback: 'pass', validatorAnnotations: 'pass' };
  await writeFile(resolve(root, 'docs/evidencia-jornada.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
} finally { await browser.close(); await new Promise(r => server.close(r)); }
