import test from 'node:test';
import assert from 'node:assert/strict';
import { criarJornada } from '../assets/jornada-core.mjs';

test('jornada encadeada usa resultados e preserva equivalência manual', async () => {
  const a = criarJornada(); const b = criarJornada();
  const invoke = (name, input) => a.tools.find(t => t.name === name).execute(input);
  const found = await invoke('buscar_cursos', { tema: 'agentes', nivel: 'iniciante' });
  assert.deepEqual(a.estado().visiveis, ['a1', 'a2', 'a3', 'd1']);
  const filtered = await invoke('filtrar_cursos', { ids: found.cursos.map(c => c.id), somenteGratuitos: true });
  await invoke('adicionar_estudos', { ids: filtered.cursos.map(c => c.id) });
  const manual = b.operations.buscar_cursos({ tema: 'agentes', nivel: 'iniciante' });
  b.operations.filtrar_cursos({ ids: manual.cursos.map(c => c.id), somenteGratuitos: true });
  for (const c of manual.cursos) b.operations.adicionar_estudos({ ids: [c.id] });
  assert.deepEqual(await invoke('consultar_jornada', {}), b.estado());
  assert.deepEqual(a.estado().lista, ['a1', 'a2']);
  await invoke('adicionar_estudos', { ids: ['a1', 'a2'] });
  assert.deepEqual(a.estado().lista, ['a1', 'a2']);
});

test('argumentos inválidos e cancelamento não causam mutação parcial', async () => {
  const j = criarJornada();
  assert.throws(() => j.operations.adicionar_estudos({ ids: ['a1', 'inexistente'] }));
  assert.throws(() => j.operations.buscar_cursos({ tema: 'agentes', extra: true }));
  assert.throws(() => j.operations.buscar_cursos({ tema: ' ' }));
  assert.throws(() => j.operations.filtrar_cursos({ ids: ['a1'], somenteGratuitos: 'sim' }));
  const controller = new AbortController(); controller.abort();
  await assert.rejects(j.tools.find(t => t.name === 'adicionar_estudos').execute({ ids: ['a1'] }, { signal: controller.signal }), { name: 'AbortError' });
  assert.deepEqual(j.estado(), { visiveis: ['a1', 'a2', 'a3', 'd1'], lista: [] });
});

test('saídas não permitem alterar o catálogo e consulta não notifica mutação', () => {
  let mutations = 0; const j = criarJornada(() => mutations++);
  const result = j.operations.buscar_cursos({ tema: 'agentes' });
  result.cursos[0].titulo = 'alterado';
  j.operations.consultar_jornada({}).lista.push('a1');
  assert.equal(mutations, 0);
  assert.equal(j.estado().lista.length, 0);
  assert.equal(j.operations.buscar_cursos({ tema: 'agentes' }).cursos[0].titulo, 'Primeiros passos com agentes');
});
