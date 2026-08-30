(() => {
  const form = document.querySelector('#course-search');
  const theme = document.querySelector('#lab-theme');
  const level = document.querySelector('#lab-level');
  const action = document.querySelector('#lab-action');
  const reset = document.querySelector('#lab-reset');
  const trace = document.querySelector('#execution-trace');
  const call = document.querySelector('#structured-call code');
  const results = document.querySelector('#course-results');
  const instruction = document.querySelector('#lab-instruction');
  const nativeStatus = document.querySelector('#native-status');
  let mode = 'humano';

  const catalog = [
    { id: 'wmcp-101', title: 'WebMCP do zero', level: 'iniciante', theme: 'webmcp' },
    { id: 'wmcp-201', title: 'Schemas para agentes', level: 'intermediario', theme: 'webmcp' },
    { id: 'mcp-101', title: 'Introdução ao MCP', level: 'iniciante', theme: 'mcp' }
  ];

  const search = ({ tema, nivel }) => catalog.filter(course =>
    course.theme.includes(String(tema).toLowerCase()) &&
    (!nivel || course.level === nivel)
  );

  const setTrace = lines => {
    trace.replaceChildren(...lines.map((line, index) => {
      const item = document.createElement('li');
      item.className = 'flex gap-3';
      const number = document.createElement('strong');
      number.className = 'text-emerald-400';
      number.textContent = String(index + 1);
      const text = document.createElement('span');
      text.textContent = line;
      item.append(number, text);
      return item;
    }));
  };

  const render = courses => {
    if (!courses.length) {
      results.textContent = '';
      const empty = document.createElement('p');
      empty.className = 'text-neutral-300';
      empty.textContent = 'Nenhum curso encontrado. Tente “WebMCP” no nível iniciante.';
      results.append(empty);
      return;
    }
    results.textContent = '';
    const heading = document.createElement('h3');
    heading.className = 'font-semibold mb-4';
    heading.textContent = `${courses.length} curso(s) encontrado(s)`;
    results.append(heading);
    courses.forEach(course => {
      const card = document.createElement('article');
      card.className = 'bg-dark-700 border border-dark-600 rounded-lg p-4 mb-3';
      const title = document.createElement('strong');
      title.textContent = course.title;
      const meta = document.createElement('p');
      meta.className = 'text-sm text-neutral-400 mt-1';
      meta.textContent = `${course.id} · ${course.level}`;
      card.append(title, meta);
      results.append(card);
    });
  };

  const executeSearch = input => {
    const courses = search(input);
    render(courses);
    return { ok: true, total: courses.length, courses };
  };

  const selectMode = next => {
    mode = next;
    document.querySelectorAll('[data-lab-mode]').forEach(button => {
      const active = button.dataset.labMode === next;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('bg-emerald-600', active);
      button.classList.toggle('text-white', active);
      button.classList.toggle('bg-dark-700', !active);
    });
    const copy = {
      humano: ['Preencha os campos e faça a busca como uma pessoa.', 'Buscar como pessoa'],
      visual: ['Observe os passos necessários para operar os controles.', 'Simular agente visual'],
      webmcp: ['Execute uma chamada estruturada sem operar cada controle.', 'Simular chamada WebMCP']
    };
    instruction.textContent = copy[next][0];
    action.textContent = copy[next][1];
    call.textContent = '—';
    setTrace(next === 'humano'
      ? ['Pessoa lê os rótulos.', 'Pessoa decide os valores.', 'Pessoa aciona a busca.']
      : next === 'visual'
        ? ['Agente observa a interface.', 'Agente procura os controles.', 'Agente prepara cliques e digitação.']
        : ['Agente recebe nome, descrição e schema.', 'LLM relaciona o pedido com buscar_cursos.', 'Agente prepara argumentos estruturados.']);
  };

  document.querySelectorAll('[data-lab-mode]').forEach(button => {
    button.addEventListener('click', () => selectMode(button.dataset.labMode));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const input = { tema: theme.value.trim(), nivel: level.value };
    if (!input.tema) {
      results.textContent = 'Informe um tema para executar a busca.';
      return;
    }
    if (mode === 'humano') {
      setTrace(['Pessoa lê os rótulos.', 'Pessoa preenche tema e nível.', 'Pessoa pressiona Buscar.', 'JavaScript filtra e renderiza resultados.']);
      call.textContent = 'Evento submit do formulário';
      executeSearch(input);
      return;
    }
    if (mode === 'visual') {
      setTrace(['Captura a página.', 'Localiza o campo Tema.', 'Clica e digita o valor.', 'Localiza o seletor Nível.', 'Seleciona a opção.', 'Localiza e pressiona Buscar.', 'Relê a página para inferir o resultado.']);
      call.textContent = '7 operações de interface (simulação)';
      executeSearch(input);
      return;
    }
    const result = executeSearch(input);
    setTrace(['Recebe buscar_cursos e seu schema.', 'Escolhe a tool para o pedido.', 'Gera dois argumentos.', 'Browser solicita execute().', 'JavaScript atualiza a UI.', 'Resultado estruturado volta ao agente.']);
    call.textContent = JSON.stringify({ tool: 'buscar_cursos', arguments: input, result }, null, 2);
  });

  reset.addEventListener('click', () => {
    theme.value = 'WebMCP';
    level.value = 'iniciante';
    results.innerHTML = '<p class="text-neutral-400">Nenhuma busca executada.</p>';
    selectMode('humano');
  });

  const registerNative = async () => {
    if (!document.modelContext?.registerTool) {
      nativeStatus.textContent = 'API nativa indisponível · simulação ativa';
      return;
    }
    try {
      await document.modelContext.registerTool({
        name: 'buscar_cursos',
        title: 'Buscar cursos',
        description: 'Busca cursos disponíveis por tema e nível.',
        inputSchema: {
          type: 'object',
          properties: {
            tema: { type: 'string', description: 'Tema desejado.' },
            nivel: { type: 'string', enum: ['iniciante', 'intermediario', 'avancado'] }
          },
          required: ['tema'],
          additionalProperties: false
        },
        annotations: { readOnlyHint: true },
        execute: async input => executeSearch(input)
      });
      nativeStatus.textContent = 'Tool nativa registrada';
    } catch (error) {
      nativeStatus.textContent = 'Registro nativo falhou · simulação ativa';
      console.warn('[INEMA Cursos] WebMCP:', error);
    }
  };

  selectMode('humano');
  registerNative();
})();

