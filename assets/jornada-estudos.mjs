import { catalogo, criarJornada } from './jornada-core.mjs';
const $ = id => document.getElementById(id);
const notice = message => { $('journey-message').textContent = message; };
const render = state => {
  $('journey-results').replaceChildren();
  for (const c of catalogo.filter(c => state.visiveis.includes(c.id))) {
    const row = document.createElement('li');
    const text = document.createElement('span');
    text.textContent = `${c.titulo} · ${c.nivel} · gratuito`;
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = state.lista.includes(c.id) ? 'Adicionado' : 'Adicionar';
    button.disabled = state.lista.includes(c.id); button.dataset.courseId = c.id;
    button.setAttribute('aria-label', `Adicionar ${c.titulo}`);
    button.onclick = () => safe(() => { journey.operations.adicionar_estudos({ ids: [c.id] }); notice('Curso adicionado à lista de estudos.'); });
    row.append(text, button); $('journey-results').append(row);
  }
  if (!state.visiveis.length) $('journey-results').textContent = 'Nenhum curso encontrado. Tente agentes ou dados.';
  $('journey-list').textContent = state.lista.length ? state.lista.map(id => catalogo.find(c => c.id === id).titulo).join(' • ') : 'Sua lista está vazia.';
};
const journey = criarJornada(render);
function safe(fn) { try { fn(); } catch (error) { notice(error.message); } }
$('journey-search').onsubmit = event => {
  event.preventDefault(); safe(() => {
    const result = journey.operations.buscar_cursos({ tema: $('journey-theme').value, nivel: $('journey-level').value });
    journey.operations.filtrar_cursos({ ids: result.cursos.map(c => c.id), somenteGratuitos: $('journey-free').checked });
    notice(`${result.cursos.length} curso(s) encontrado(s).`);
  });
};
let running = false;
$('journey-run').onclick = async () => {
  if (running) return;
  running = true; $('journey-run').disabled = true; $('journey-reset').disabled = true;
  $('journey-trace').replaceChildren();
  const started = performance.now();
  try {
    const invoke = async (name, input) => {
      const result = await journey.tools.find(t => t.name === name).execute(input);
      const item = document.createElement('li'); item.textContent = `${name}(${JSON.stringify(input)}) → ${JSON.stringify(result)}`;
      $('journey-trace').append(item); return result;
    };
    const found = await invoke('buscar_cursos', { tema: 'agentes', nivel: 'iniciante' });
    const filtered = await invoke('filtrar_cursos', { ids: found.cursos.map(c => c.id), somenteGratuitos: true });
    await invoke('adicionar_estudos', { ids: filtered.cursos.map(c => c.id) });
    const final = await invoke('consultar_jornada', {});
    notice(`Sequência local concluída: ${final.lista.length} cursos na lista.`);
    $('journey-time').textContent = `4 chamadas locais em ${(performance.now() - started).toFixed(2)} ms. Sem modelo de IA, sem tokens e sem tráfego de ferramentas pela API nativa. Não mede o custo de um agente.`;
  } catch (error) { notice(`Não foi possível concluir: ${error.message}`); }
  finally { running = false; $('journey-run').disabled = false; $('journey-reset').disabled = false; }
};
$('journey-reset').onclick = () => {
  journey.reset(); $('journey-search').reset(); $('journey-trace').replaceChildren(); $('journey-time').textContent = ''; notice('Laboratório reiniciado.');
};
let registration;
async function register() {
  if (!document.modelContext?.registerTool) { $('journey-native').textContent = 'API nativa indisponível. A interface e a sequência local continuam funcionando.'; return; }
  registration?.abort(); registration = new AbortController();
  const controller = registration;
  try {
    for (const tool of journey.tools) await document.modelContext.registerTool(tool, { signal: controller.signal });
    $('journey-native').textContent = '4 ferramentas registradas na API nativa. A execução por agente depende de um navegador compatível.';
  } catch {
    controller.abort(); $('journey-native').textContent = 'Registro nativo não concluído. Use a interface ou a sequência local.';
  }
}
window.addEventListener('pagehide', () => registration?.abort());
window.addEventListener('pageshow', event => { if (event.persisted) register(); });
render(journey.estado()); register();
