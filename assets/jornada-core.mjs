// A interface e as ferramentas usam as mesmas operações e validações.
export const catalogo = Object.freeze([
  { id: 'a1', titulo: 'Primeiros passos com agentes', tema: 'agentes', nivel: 'iniciante', gratuito: true },
  { id: 'a2', titulo: 'Agentes no dia a dia', tema: 'agentes', nivel: 'iniciante', gratuito: true },
  { id: 'a3', titulo: 'Orquestração de agentes', tema: 'agentes', nivel: 'avancado', gratuito: true },
  { id: 'd1', titulo: 'Introdução à análise de dados', tema: 'dados', nivel: 'iniciante', gratuito: true }
].map(Object.freeze));

export function criarJornada(onChange = () => {}) {
  let visiveis = catalogo.map(c => c.id);
  let lista = [];
  const estado = () => ({ visiveis: [...visiveis], lista: [...lista] });
  const validar = (input, keys) => {
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Informe um objeto de argumentos.');
    if (Object.keys(input).some(k => !keys.includes(k))) throw new Error('Argumento não permitido.');
  };
  const idsValidos = ids => {
    if (!Array.isArray(ids) || ids.length > catalogo.length || ids.some(id => !catalogo.some(c => c.id === id))) throw new Error('Use somente IDs presentes no catálogo (até 4).');
    return [...new Set(ids)];
  };
  const operations = {
    buscar_cursos(input) {
      validar(input, ['tema', 'nivel']);
      if (typeof input.tema !== 'string' || !input.tema.trim() || input.tema.length > 80) throw new Error('Informe um tema de 1 a 80 caracteres.');
      if (input.nivel !== undefined && !['iniciante', 'avancado'].includes(input.nivel)) throw new Error('Nível inválido.');
      return { cursos: catalogo.filter(c => c.tema.includes(input.tema.trim().toLowerCase()) && (!input.nivel || c.nivel === input.nivel)).map(c => ({ ...c })) };
    },
    filtrar_cursos(input) {
      validar(input, ['ids', 'somenteGratuitos']);
      if (typeof input.somenteGratuitos !== 'boolean') throw new Error('Informe somenteGratuitos como booleano.');
      const ids = idsValidos(input.ids);
      visiveis = ids.filter(id => !input.somenteGratuitos || catalogo.find(c => c.id === id).gratuito);
      onChange(estado());
      return { cursos: catalogo.filter(c => visiveis.includes(c.id)).map(c => ({ ...c })) };
    },
    adicionar_estudos(input) {
      validar(input, ['ids']);
      const ids = idsValidos(input.ids); // valida tudo antes de alterar; repetir não duplica
      lista = [...new Set([...lista, ...ids])];
      onChange(estado());
      return { lista: [...lista], total: lista.length };
    },
    consultar_jornada(input) { validar(input, []); return estado(); }
  };
  const idsSchema = { type: 'array', maxItems: 4, uniqueItems: true, items: { type: 'string', enum: catalogo.map(c => c.id) } };
  const schemas = {
    buscar_cursos: { properties: { tema: { type: 'string', minLength: 1, maxLength: 80 }, nivel: { type: 'string', enum: ['iniciante', 'avancado'] } }, required: ['tema'] },
    filtrar_cursos: { properties: { ids: idsSchema, somenteGratuitos: { type: 'boolean' } }, required: ['ids', 'somenteGratuitos'] },
    adicionar_estudos: { properties: { ids: idsSchema }, required: ['ids'] },
    consultar_jornada: { properties: {}, required: [] }
  };
  const descriptions = {
    buscar_cursos: 'Consulta o catálogo fictício por tema e nível, sem alterar a página. Retorna IDs e metadados.',
    filtrar_cursos: 'Exibe apenas os IDs indicados na página e aplica o filtro de gratuidade. Altera a visualização local.',
    adicionar_estudos: 'Adiciona IDs à lista temporária de estudos sem duplicar. Altera apenas esta aba, sem salvar no servidor.',
    consultar_jornada: 'Consulta os IDs visíveis e a lista temporária de estudos, sem alterar estado.'
  };
  const tools = Object.keys(operations).map(name => ({
    name, description: descriptions[name],
    inputSchema: { type: 'object', ...schemas[name], additionalProperties: false },
    annotations: { readOnlyHint: ['buscar_cursos', 'consultar_jornada'].includes(name), untrustedContentHint: false, consequentialHint: false, debugging: false },
    execute: async (input, { signal } = {}) => {
      signal?.throwIfAborted();
      return operations[name](input);
    }
  }));
  return { tools, operations, estado, reset() { visiveis = catalogo.map(c => c.id); lista = []; onChange(estado()); } };
}
