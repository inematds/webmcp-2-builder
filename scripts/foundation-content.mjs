export const foundationSections = String.raw`
<section id="topico-1" data-inema-topic="modulo-1-1#topico-1" class="mb-16">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
    <div class="flex items-center gap-4">
      <span class="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl flex-shrink-0">1</span>
      <h2 class="text-2xl font-bold">Veja o problema antes da tecnologia</h2>
    </div>
    <button type="button" data-inema-doubt-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-neutral-300 self-start"><span aria-hidden="true">?</span><span>Tenho dúvida</span></button>
  </div>
  <div class="inema-prose">
    <p data-inema-block="m1-1-t1-p1" class="text-neutral-300 mb-5 leading-relaxed"><strong class="text-emerald-400">O que é:</strong> um mesmo objetivo pode ser alcançado por caminhos diferentes. Nosso exemplo será o site fictício <strong>INEMA Cursos</strong>, no qual alguém quer encontrar um curso de WebMCP para iniciante.</p>
    <p data-inema-block="m1-1-t1-p2" class="text-neutral-300 mb-6 leading-relaxed"><strong class="text-emerald-400">Por que aprender:</strong> se você começa pela sintaxe, WebMCP parece apenas mais uma API. Quando começa pela jornada, percebe a mudança: agentes de navegador e tecnologias assistivas deixam de depender apenas da interpretação visual e passam a conversar com uma capacidade declarada.</p>
  </div>
  <div class="bg-dark-800 border border-dark-600 rounded-xl overflow-hidden mb-6" aria-label="Recriação ilustrativa do site INEMA Cursos">
    <div class="px-5 py-3 border-b border-dark-600 flex items-center justify-between">
      <span class="font-semibold">INEMA Cursos</span>
      <span class="text-xs text-neutral-500">recriação ilustrativa</span>
    </div>
    <div class="p-6 grid md:grid-cols-[1fr_1fr_auto] gap-4 items-end">
      <label class="text-sm font-medium">Tema<input value="WebMCP" readonly class="mt-2 w-full rounded-lg bg-dark-700 border border-dark-600 px-4 py-3 text-neutral-300"></label>
      <label class="text-sm font-medium">Nível<select disabled class="mt-2 w-full rounded-lg bg-dark-700 border border-dark-600 px-4 py-3 text-neutral-300"><option>Iniciante</option></select></label>
      <button type="button" class="px-5 py-3 rounded-lg bg-emerald-600 text-white">Buscar</button>
    </div>
  </div>
  <div class="grid lg:grid-cols-3 gap-5 mb-6">
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5">
      <h3 class="font-semibold">Pessoa</h3>
      <ol class="mt-4 space-y-2 text-sm text-neutral-300">
        <li>1. Lê os rótulos.</li>
        <li>2. Preenche tema e nível.</li>
        <li>3. Pressiona Buscar.</li>
        <li>4. Interpreta a lista.</li>
      </ol>
    </article>
    <article class="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
      <h3 class="font-semibold text-red-400">Agente visual</h3>
      <ol class="mt-4 space-y-2 text-sm text-neutral-300">
        <li>1. Observa pixels ou DOM.</li>
        <li>2. Localiza os controles.</li>
        <li>3. Clica, digita e seleciona.</li>
        <li>4. Relê a tela para inferir sucesso.</li>
      </ol>
    </article>
    <article class="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-5">
      <h3 class="font-semibold text-emerald-400">Agente com WebMCP</h3>
      <ol class="mt-4 space-y-2 text-sm text-neutral-300">
        <li>1. Recebe a tool <code>buscar_cursos</code>.</li>
        <li>2. Monta argumentos estruturados.</li>
        <li>3. Invoca a capacidade.</li>
        <li>4. Recebe um resultado verificável.</li>
      </ol>
    </article>
  </div>
  <div class="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-primary">A frase que organiza a aula</h3>
    <p class="text-neutral-300 mt-3 text-lg">O site deixa de ser apenas algo que o agente enxerga e passa a ser algo com que ele conversa estruturalmente.</p>
  </div>
  <pre class="code-shell mb-6"><code>buscar_cursos({
  tema: "WebMCP",
  nivel: "iniciante"
})</code></pre>
  <div class="bg-dark-800 border border-dark-600 rounded-xl p-6 mb-6">
    <h3 class="font-semibold">Pare e preveja</h3>
    <p class="text-neutral-300 mt-2">Se o botão mudar de “Buscar” para “Encontrar”, qual caminho tende a quebrar primeiro? A automação que depende do controle visual. A intenção da tool continua <code>buscar_cursos</code>.</p>
  </div>
  <div><h3 class="font-semibold text-emerald-400">Conceitos-chave</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
      <div class="bg-dark-700/60 border border-dark-600 rounded-lg p-4"><strong class="text-emerald-400 text-xs">01</strong><p class="text-sm mt-2">objetivo humano</p></div>
      <div class="bg-dark-700/60 border border-dark-600 rounded-lg p-4"><strong class="text-emerald-400 text-xs">02</strong><p class="text-sm mt-2">passos visuais</p></div>
      <div class="bg-dark-700/60 border border-dark-600 rounded-lg p-4"><strong class="text-emerald-400 text-xs">03</strong><p class="text-sm mt-2">capacidade explícita</p></div>
      <div class="bg-dark-700/60 border border-dark-600 rounded-lg p-4"><strong class="text-emerald-400 text-xs">04</strong><p class="text-sm mt-2">mesma interface</p></div>
    </div>
  </div>
  <div class="flex justify-start mt-7"><button type="button" data-inema-read-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"><span class="inema-read-icon" aria-hidden="true">○</span><span data-inema-read-label>Marcar como lido</span></button></div>
</section>

<section id="topico-2" data-inema-topic="modulo-1-1#topico-2" class="mb-16">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
    <div class="flex items-center gap-4"><span class="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl flex-shrink-0">2</span><h2 class="text-2xl font-bold">Separe cinco formas de conversar com um site</h2></div>
    <button type="button" data-inema-doubt-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-neutral-300 self-start"><span aria-hidden="true">?</span><span>Tenho dúvida</span></button>
  </div>
  <div class="inema-prose">
    <p data-inema-block="m1-1-t2-p1" class="text-neutral-300 mb-5 leading-relaxed"><strong class="text-emerald-400">O que é:</strong> Web semântica, automação de navegador, API, MCP e WebMCP não são sinônimos. São interfaces diferentes para entender, operar, chamar ou descobrir capacidades.</p>
    <p data-inema-block="m1-1-t2-p2" class="text-neutral-300 mb-6 leading-relaxed"><strong class="text-emerald-400">Por que aprender:</strong> um Builder escolhe a interface pelo problema. Confundir esses termos produz tools que apenas repetem endpoints, agentes frágeis e falsas promessas de segurança.</p>
  </div>
  <div class="overflow-x-auto border border-dark-600 rounded-xl mb-6">
    <table class="w-full text-sm text-left min-w-[760px]">
      <thead class="bg-dark-700"><tr><th class="p-4">Tecnologia</th><th class="p-4">O agente faz o quê?</th><th class="p-4">No INEMA Cursos</th><th class="p-4">Limite</th></tr></thead>
      <tbody class="divide-y divide-dark-600">
        <tr><th class="p-4 text-emerald-400">Web semântica</th><td class="p-4">Entende estrutura e significado.</td><td class="p-4">Reconhece formulário e resultados.</td><td class="p-4 text-neutral-400">Entender não executa uma intenção.</td></tr>
        <tr><th class="p-4 text-emerald-400">Automação do browser</th><td class="p-4">Opera elementos e navegação.</td><td class="p-4">Preenche inputs e clica.</td><td class="p-4 text-neutral-400">Depende da apresentação.</td></tr>
        <tr><th class="p-4 text-emerald-400">API</th><td class="p-4">Chama endpoints conhecidos.</td><td class="p-4"><code>GET /api/cursos</code></td><td class="p-4 text-neutral-400">A LLM não descobre finalidade sozinha.</td></tr>
        <tr><th class="p-4 text-emerald-400">MCP</th><td class="p-4">Descobre tools por servidor MCP.</td><td class="p-4">Um servidor oferece busca a clientes.</td><td class="p-4 text-neutral-400">Não nasce do documento atual.</td></tr>
        <tr><th class="p-4 text-emerald-400">WebMCP</th><td class="p-4">Recebe tools da experiência web.</td><td class="p-4">A página oferece <code>buscar_cursos</code>.</td><td class="p-4 text-neutral-400">Depende do contexto e suporte.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="grid md:grid-cols-2 gap-6 mb-6">
    <div class="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
      <h3 class="font-semibold text-emerald-400">O que WebMCP acrescenta</h3>
      <ul class="mt-4 space-y-2 text-neutral-300"><li>✓ capacidades descobertas na página;</li><li>✓ descrição em linguagem natural;</li><li>✓ argumentos definidos por schema;</li><li>✓ execução ligada à experiência.</li></ul>
    </div>
    <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
      <h3 class="font-semibold text-red-400">O que não substitui</h3>
      <ul class="mt-4 space-y-2 text-neutral-300"><li>✗ HTML semântico;</li><li>✗ API e regras do backend;</li><li>✗ autorização e validação;</li><li>✗ interface e controle humano.</li></ul>
    </div>
  </div>
  <div class="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
    <h3 class="font-semibold text-primary">Uma analogia precisa</h3>
    <p class="text-neutral-300 mt-3">A API é a cozinha. MCP é um balcão padronizado que apresenta serviços a agentes. WebMCP é o cardápio contextual da mesa atual, implementado pelo JavaScript da página e apoiado pela cozinha.</p>
  </div>
  <pre class="code-shell mb-6"><code>API       aplicação → HTTP → backend
MCP       LLM → host MCP → servidor MCP → sistemas
WebMCP    LLM → agente do navegador → página → JS/UI/backend</code></pre>
  <div><h3 class="font-semibold text-emerald-400">Conceitos-chave</h3><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6"><div class="bg-dark-700 p-4 rounded-lg">semântica entende</div><div class="bg-dark-700 p-4 rounded-lg">browser opera</div><div class="bg-dark-700 p-4 rounded-lg">API é conhecida</div><div class="bg-dark-700 p-4 rounded-lg">tools são descobertas</div></div></div>
  <div class="flex justify-start mt-7"><button type="button" data-inema-read-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"><span class="inema-read-icon" aria-hidden="true">○</span><span data-inema-read-label>Marcar como lido</span></button></div>
</section>

<section id="topico-3" data-inema-topic="modulo-1-1#topico-3" class="mb-16">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
    <div class="flex items-center gap-4"><span class="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl flex-shrink-0">3</span><h2 class="text-2xl font-bold">Acompanhe o momento mágico do WebMCP</h2></div>
    <button type="button" data-inema-doubt-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 text-neutral-300 self-start"><span aria-hidden="true">?</span><span>Tenho dúvida</span></button>
  </div>
  <div class="inema-prose">
    <p data-inema-block="m1-1-t3-p1" class="text-neutral-300 mb-5 leading-relaxed"><strong class="text-emerald-400">O que é:</strong> a página registra, o navegador observa, o agente recebe metadados, escolhe e pede a execução. A tool não aparece magicamente para a LLM.</p>
    <p data-inema-block="m1-1-t3-p2" class="text-neutral-300 mb-6 leading-relaxed"><strong class="text-emerald-400">Por que aprender:</strong> enxergar o ciclo impede atribuir a decisão à página, colocar autorização na descrição ou esperar que a LLM chame uma API que nunca lhe foi apresentada.</p>
  </div>
  <div class="rounded-2xl border border-emerald-500/30 bg-dark-900/40 p-4 mb-7 overflow-hidden">
    <svg viewBox="0 0 1000 380" class="w-full h-auto" role="img" aria-label="Ciclo do WebMCP desde o registro até o resultado">
      <defs><filter id="m11-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><marker id="m11-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L8,4.5 L0,9 L2.4,4.5 Z" fill="#38bdf8"/></marker></defs>
      <g fill="none" stroke="#38bdf8" stroke-width="1.8" opacity=".62" marker-end="url(#m11-arrow)"><path d="M220 80 H290"/><path d="M470 80 H540"/><path d="M720 80 C850 80 850 190 790 190"/><path d="M610 190 H540"/><path d="M360 190 H290"/><path d="M110 190 C40 190 40 300 110 300"/><path d="M290 300 H360"/></g>
      <g font-family="Inter,sans-serif"><g><rect x="40" y="45" width="180" height="70" rx="14" fill="#0e2018" stroke="#34d399" stroke-width="2"/><text x="130" y="76" text-anchor="middle" fill="#34d399" font-weight="600">1 · Página abre</text><text x="130" y="97" text-anchor="middle" fill="#a7f3d0" font-size="12">JavaScript carrega</text></g>
      <g><rect x="290" y="45" width="180" height="70" rx="14" fill="#0e2018" stroke="#34d399" stroke-width="2"/><text x="380" y="76" text-anchor="middle" fill="#34d399" font-weight="600">2 · Registra</text><text x="380" y="97" text-anchor="middle" fill="#a7f3d0" font-size="12">nome + schema + execute</text></g>
      <g><rect x="540" y="45" width="180" height="70" rx="14" fill="#0e1b26" stroke="#38bdf8" stroke-width="2"/><text x="630" y="76" text-anchor="middle" fill="#9ad6ff" font-weight="600">3 · Observa</text><text x="630" y="97" text-anchor="middle" fill="#bfe6ff" font-size="12">browser obtém tools</text></g>
      <g><rect x="790" y="155" width="170" height="70" rx="14" fill="#0e1b26" stroke="#38bdf8" stroke-width="2"/><text x="875" y="186" text-anchor="middle" fill="#9ad6ff" font-weight="600">4 · LLM decide</text><text x="875" y="207" text-anchor="middle" fill="#bfe6ff" font-size="12">escolhe + argumenta</text></g>
      <g filter="url(#m11-glow)"><rect x="360" y="155" width="180" height="70" rx="14" fill="#10b981" stroke="#34d399" stroke-width="2"/></g><text x="450" y="186" text-anchor="middle" fill="#06281d" font-family="Inter,sans-serif" font-weight="600">5 · execute()</text><text x="450" y="207" text-anchor="middle" fill="#064e3b" font-family="Inter,sans-serif" font-size="12">JavaScript da página</text>
      <g><rect x="110" y="155" width="180" height="70" rx="14" fill="#0e2018" stroke="#34d399" stroke-width="2"/><text x="200" y="186" text-anchor="middle" fill="#34d399" font-weight="600">6 · Aplicação age</text><text x="200" y="207" text-anchor="middle" fill="#a7f3d0" font-size="12">UI / estado / backend</text></g>
      <g><rect x="110" y="265" width="180" height="70" rx="14" fill="#0e2018" stroke="#34d399" stroke-width="2"/><text x="200" y="296" text-anchor="middle" fill="#34d399" font-weight="600">7 · Resultado</text><text x="200" y="317" text-anchor="middle" fill="#a7f3d0" font-size="12">objeto verificável</text></g>
      <g><rect x="360" y="265" width="220" height="70" rx="14" fill="#0e1b26" stroke="#38bdf8" stroke-width="2"/><text x="470" y="296" text-anchor="middle" fill="#9ad6ff" font-weight="600">8 · Agente continua</text><text x="470" y="317" text-anchor="middle" fill="#bfe6ff" font-size="12">explica ou escolhe outra tool</text></g></g>
    </svg>
  </div>
  <div class="space-y-4 mb-6">
    <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">A</div><div class="flex-1 bg-dark-800 border border-dark-600 rounded-xl p-5"><h3 class="font-semibold">A página oferece</h3><p class="text-sm text-neutral-400 mt-2">Registra uma capacidade, mas não decide o objetivo do usuário.</p></div></div>
    <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold flex-shrink-0">B</div><div class="flex-1 bg-dark-800 border border-dark-600 rounded-xl p-5"><h3 class="font-semibold">O agente raciocina</h3><p class="text-sm text-neutral-400 mt-2">Relaciona pedido, descrição e schema; depois produz a chamada.</p></div></div>
    <div class="flex items-start gap-4"><div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold flex-shrink-0">C</div><div class="flex-1 bg-dark-800 border border-dark-600 rounded-xl p-5"><h3 class="font-semibold">A aplicação executa</h3><p class="text-sm text-neutral-400 mt-2">Atualiza a UI e pode chamar um backend, que continua autorizando.</p></div></div>
  </div>
  <div class="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6"><h3 class="font-semibold text-primary">Detalhe do draft</h3><p class="text-neutral-300 mt-3"><code>getTools()</code> atende agentes dentro da página. O agente do navegador observa as tools por mecanismo interno do user agent.</p></div>
  <div><h3 class="font-semibold text-emerald-400">Conceitos-chave</h3><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6"><div class="bg-dark-700 p-4 rounded-lg">página registra</div><div class="bg-dark-700 p-4 rounded-lg">browser observa</div><div class="bg-dark-700 p-4 rounded-lg">LLM escolhe</div><div class="bg-dark-700 p-4 rounded-lg">execute realiza</div></div></div>
  <div class="flex justify-start mt-7"><button type="button" data-inema-read-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"><span class="inema-read-icon" aria-hidden="true">○</span><span data-inema-read-label>Marcar como lido</span></button></div>
</section>

<section id="topico-4" data-inema-topic="modulo-1-1#topico-4" class="mb-16">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"><div class="flex items-center gap-4"><span class="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl">4</span><h2 class="text-2xl font-bold">Leia sua primeira tool linha por linha</h2></div><button type="button" data-inema-doubt-toggle aria-pressed="false" class="px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 self-start">? Tenho dúvida</button></div>
  <div class="inema-prose">
    <p data-inema-block="m1-1-t4-p1" class="text-neutral-300 mb-5"><strong class="text-emerald-400">O que é:</strong> uma tool imperativa é um objeto registrado em <code>document.modelContext</code>. Ela combina identidade, orientação, contrato de entrada e comportamento real.</p>
    <p data-inema-block="m1-1-t4-p2" class="text-neutral-300 mb-6"><strong class="text-emerald-400">Por que aprender:</strong> uma tool pode executar e ainda ser impossível de escolher, aceitar argumentos ruins ou devolver resultado inútil. O contrato é parte do produto.</p>
  </div>
  <pre class="code-shell mb-6"><code>await document.modelContext.registerTool({
  name: "buscar_cursos",
  title: "Buscar cursos",
  description: "Busca cursos disponíveis por tema e nível.",
  inputSchema: {
    type: "object",
    properties: {
      tema: { type: "string", description: "Assunto desejado." },
      nivel: {
        type: "string",
        enum: ["iniciante", "intermediario", "avancado"]
      }
    },
    required: ["tema"],
    additionalProperties: false
  },
  execute: async ({ tema, nivel }, { signal }) => {
    const cursos = await buscarCursos({ tema, nivel, signal });
    mostrarCursosNaTela(cursos);
    return { ok: true, total: cursos.length, cursos };
  }
});</code></pre>
  <div class="grid md:grid-cols-2 gap-5 mb-6">
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5"><p class="text-xs text-emerald-400 font-semibold">name</p><h3 class="font-semibold mt-2">Identifica</h3><p class="text-sm text-neutral-400 mt-2">É a chave estável usada na chamada.</p></article>
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5"><p class="text-xs text-sky-400 font-semibold">description</p><h3 class="font-semibold mt-2">Orienta a escolha</h3><p class="text-sm text-neutral-400 mt-2">Explica quando e para que usar; não autoriza.</p></article>
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5"><p class="text-xs text-emerald-400 font-semibold">inputSchema</p><h3 class="font-semibold mt-2">Delimita</h3><p class="text-sm text-neutral-400 mt-2">Descreve tipos, enumerações e obrigatórios.</p></article>
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5"><p class="text-xs text-sky-400 font-semibold">execute</p><h3 class="font-semibold mt-2">Realiza</h3><p class="text-sm text-neutral-400 mt-2">Recebe a entrada e um <code>AbortSignal</code>.</p></article>
  </div>
  <div class="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 mb-6"><h3 class="font-semibold text-emerald-400">Trace a execução</h3><pre class="code-shell mt-4"><code>pedido:  "Procure WebMCP para iniciante"
escolha: buscar_cursos
entrada:  { tema: "WebMCP", nivel: "iniciante" }
efeito:   lista renderizada na página
saída:    { ok: true, total: 2, cursos: [...] }</code></pre></div>
  <div class="grid md:grid-cols-2 gap-6 mb-6"><div class="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6"><h3 class="text-emerald-400 font-semibold">Contrato útil</h3><p class="mt-3"><code>buscar_cursos</code> tem objetivo e saída observável.</p></div><div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6"><h3 class="text-red-400 font-semibold">Contrato vago</h3><p class="mt-3"><code>gerenciar_site({ dados })</code> esconde intenções e efeitos.</p></div></div>
  <details class="bg-dark-800 border border-dark-600 rounded-xl p-6 mb-6"><summary class="font-semibold text-sky-400 cursor-pointer">Indo mais fundo: cancelamento</summary><p class="mt-4 text-neutral-300">Passe o <code>signal</code> ao <code>fetch</code>. Quando o agente cancelar, interrompa trabalho e limpe o estado visual.</p></details>
  <div><h3 class="font-semibold text-emerald-400">Conceitos-chave</h3><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6"><div class="bg-dark-700 p-4 rounded-lg">name identifica</div><div class="bg-dark-700 p-4 rounded-lg">description orienta</div><div class="bg-dark-700 p-4 rounded-lg">schema delimita</div><div class="bg-dark-700 p-4 rounded-lg">execute realiza</div></div></div>
  <div class="flex justify-start mt-7"><button type="button" data-inema-read-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"><span class="inema-read-icon" aria-hidden="true">○</span><span data-inema-read-label>Marcar como lido</span></button></div>
</section>

<section id="topico-5" data-inema-topic="modulo-1-1#topico-5" class="mb-16">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"><div class="flex items-center gap-4"><span class="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl">5</span><h2 class="text-2xl font-bold">Veja o catálogo mudar com o contexto</h2></div><button type="button" data-inema-doubt-toggle aria-pressed="false" class="px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 self-start">? Tenho dúvida</button></div>
  <div class="inema-prose">
    <p data-inema-block="m1-1-t5-p1" class="text-neutral-300 mb-5"><strong class="text-emerald-400">O que é:</strong> o catálogo pode ser efêmero. Tools aparecem ou desaparecem conforme documento, rota, componente e sessão.</p>
    <p data-inema-block="m1-1-t5-p2" class="text-neutral-300 mb-6"><strong class="text-emerald-400">Por que aprender:</strong> oferecer todas as ações o tempo todo aumenta contexto, confunde a escolha e permite chamadas sem sentido no estado atual.</p>
  </div>
  <div class="bg-dark-800 border border-dark-600 rounded-xl p-6 mb-6" data-catalog-demo>
    <div class="flex flex-wrap gap-2 mb-6" role="group" aria-label="Estado do site">
      <button type="button" data-catalog-state="home" aria-pressed="true" class="catalog-state px-4 py-2 rounded-lg bg-emerald-600 text-white">Home</button>
      <button type="button" data-catalog-state="produto" aria-pressed="false" class="catalog-state px-4 py-2 rounded-lg bg-dark-700">Produto</button>
      <button type="button" data-catalog-state="carrinho" aria-pressed="false" class="catalog-state px-4 py-2 rounded-lg bg-dark-700">Carrinho</button>
      <button type="button" data-catalog-state="conta" aria-pressed="false" class="catalog-state px-4 py-2 rounded-lg bg-dark-700">Conta</button>
    </div>
    <div class="grid md:grid-cols-[.8fr_1.2fr] gap-6"><div><p class="text-xs text-neutral-500">CONTEXTO</p><h3 class="text-xl font-bold mt-2" data-catalog-title>Home pública</h3><p class="text-sm text-neutral-400 mt-3" data-catalog-copy>A pessoa ainda está descobrindo o catálogo.</p></div><div class="bg-dark-900 border border-dark-600 rounded-lg p-5"><p class="text-xs text-sky-400 font-semibold">TOOLS EXPOSTAS</p><ul class="mt-3 space-y-2 font-mono text-sm" data-catalog-tools><li>buscar_cursos</li><li>abrir_categoria</li></ul></div></div>
  </div>
  <div class="grid md:grid-cols-2 gap-5 mb-6">
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5"><h3 class="font-semibold">Home</h3><p class="text-sm text-neutral-400 mt-2"><code>buscar_cursos</code> · <code>abrir_categoria</code></p></article>
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5"><h3 class="font-semibold">Curso</h3><p class="text-sm text-neutral-400 mt-2"><code>ver_detalhes</code> · <code>adicionar_carrinho</code></p></article>
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5"><h3 class="font-semibold">Carrinho</h3><p class="text-sm text-neutral-400 mt-2"><code>alterar_quantidade</code> · <code>iniciar_checkout</code></p></article>
    <article class="bg-dark-800 border border-dark-600 rounded-xl p-5"><h3 class="font-semibold">Conta</h3><p class="text-sm text-neutral-400 mt-2"><code>consultar_pedidos</code> · <code>alterar_endereco</code></p></article>
  </div>
  <pre class="code-shell mb-6"><code>const paginaProduto = new AbortController();

await document.modelContext.registerTool(
  adicionarAoCarrinho,
  { signal: paginaProduto.signal }
);

// O componente saiu da tela.
paginaProduto.abort("Produto fechado");</code></pre>
  <div class="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6"><h3 class="font-semibold text-primary">Catálogo pequeno é produto</h3><p class="text-neutral-300 mt-3">A tool de alterar endereço só aparece depois do login, mas a autorização real ainda pertence ao backend.</p></div>
  <div><h3 class="font-semibold text-emerald-400">Conceitos-chave</h3><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6"><div class="bg-dark-700 p-4 rounded-lg">estado seleciona</div><div class="bg-dark-700 p-4 rounded-lg">tools aparecem</div><div class="bg-dark-700 p-4 rounded-lg">abort remove</div><div class="bg-dark-700 p-4 rounded-lg">backend autoriza</div></div></div>
  <div class="flex justify-start mt-7"><button type="button" data-inema-read-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"><span class="inema-read-icon" aria-hidden="true">○</span><span data-inema-read-label>Marcar como lido</span></button></div>
</section>

<section id="topico-6" data-inema-topic="modulo-1-1#topico-6" class="mb-16">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6"><div class="flex items-center gap-4"><span class="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl">6</span><h2 class="text-2xl font-bold">Construa, erre e explique sua arquitetura</h2></div><button type="button" data-inema-doubt-toggle aria-pressed="false" class="px-3 py-2 rounded-lg bg-dark-700 border border-dark-600 self-start">? Tenho dúvida</button></div>
  <div class="inema-prose">
    <p data-inema-block="m1-1-t6-p1" class="text-neutral-300 mb-5"><strong class="text-emerald-400">O que é:</strong> o primeiro projeto é uma experiência completa: fluxo humano, tool, resultado visível, falha compreensível e limite arquitetural declarado.</p>
    <p data-inema-block="m1-1-t6-p2" class="text-neutral-300 mb-6"><strong class="text-emerald-400">Por que aprender:</strong> uma demo feliz não prova fallback, cancelamento, autorização nem recuperação. Builder responde pela interação inteira.</p>
  </div>
  <div class="grid lg:grid-cols-2 gap-6 mb-6">
    <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6"><h3 class="font-semibold text-red-400">Tool não existe</h3><p class="text-neutral-300 mt-3">O ambiente não oferece <code>document.modelContext</code>.</p><p class="text-sm text-neutral-400 mt-2"><strong>Recupere:</strong> mantenha o formulário funcional e informe o modo atual.</p></div>
    <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6"><h3 class="font-semibold text-red-400">Entrada inválida</h3><p class="text-neutral-300 mt-3">O nível não pertence ao enum.</p><p class="text-sm text-neutral-400 mt-2"><strong>Recupere:</strong> nomeie campo, problema e valores aceitos.</p></div>
    <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6"><h3 class="font-semibold text-red-400">Backend nega</h3><p class="text-neutral-300 mt-3">A sessão não permite a ação.</p><p class="text-sm text-neutral-400 mt-2"><strong>Recupere:</strong> preserve autorização e oriente login ou alternativa.</p></div>
    <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-6"><h3 class="font-semibold text-red-400">Usuário cancela</h3><p class="text-neutral-300 mt-3">A busca perde utilidade.</p><p class="text-sm text-neutral-400 mt-2"><strong>Recupere:</strong> propague o signal e limpe o carregamento.</p></div>
  </div>
  <div class="bg-dark-800 border border-dark-600 rounded-xl p-6 mb-6">
    <h3 class="text-xl font-bold">Exercício guiado</h3>
    <ol class="mt-4 space-y-3 text-neutral-300">
      <li><strong class="text-emerald-400">1.</strong> Escreva o pedido humano.</li>
      <li><strong class="text-emerald-400">2.</strong> Liste os passos visuais.</li>
      <li><strong class="text-emerald-400">3.</strong> Defina nome, descrição, entrada e saída.</li>
      <li><strong class="text-emerald-400">4.</strong> Separe página e backend.</li>
      <li><strong class="text-emerald-400">5.</strong> Provoque falha e cancelamento.</li>
    </ol>
  </div>
  <div class="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 mb-6"><h3 class="text-xl font-bold text-emerald-400">Desafio Builder</h3><p class="text-neutral-300 mt-3">Adicione <code>consultar_curso({ cursoId })</code> sem sobrepor <code>buscar_cursos</code>. Explique como o agente decide entre elas.</p></div>
  <div class="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
    <h3 class="text-xl font-bold text-primary">Projeto do módulo</h3>
    <p class="text-neutral-300 mt-3">Entregue o mini-site INEMA Cursos com busca manual e simulação identificada de chamada WebMCP. Se a API existir, registre a tool real por enhancement progressivo.</p>
    <div class="flex justify-start flex-wrap gap-3 mt-5"><a href="../../labs/inema-cursos.html" class="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold">Abrir mini-site progressivo</a><a href="../../labs/validador-tools.html" class="px-5 py-3 rounded-lg border border-sky-500/30 text-sky-400">Auditar o contrato</a></div>
  </div>
  <div class="bg-dark-800 border border-dark-600 rounded-xl p-6 mb-6"><h3 class="font-semibold">Critérios de aceite</h3><ul class="grid md:grid-cols-2 gap-3 mt-4 text-sm text-neutral-300"><li>✓ busca humana funciona;</li><li>✓ simulação está identificada;</li><li>✓ chamada e retorno aparecem;</li><li>✓ estado visual muda;</li><li>✓ erro ensina a corrigir;</li><li>✓ arquitetura separa responsabilidades.</li></ul></div>
  <div class="bg-dark-800 border border-dark-600 rounded-xl p-6 mb-6">
    <h3 class="font-semibold">Explique a arquitetura em quatro vozes</h3>
    <div class="grid md:grid-cols-2 gap-4 mt-5 text-sm">
      <div class="border border-dark-600 rounded-lg p-4">
        <strong class="text-emerald-400">Pessoa</strong>
        <p class="text-neutral-400 mt-2">Define o objetivo, acompanha o estado e confirma efeitos relevantes.</p>
      </div>
      <div class="border border-dark-600 rounded-lg p-4">
        <strong class="text-sky-400">LLM / agente</strong>
        <p class="text-neutral-400 mt-2">Interpreta o pedido, escolhe a tool e monta os argumentos.</p>
      </div>
      <div class="border border-dark-600 rounded-lg p-4">
        <strong class="text-emerald-400">Página</strong>
        <p class="text-neutral-400 mt-2">Registra a capacidade, executa JavaScript e mantém a interface sincronizada.</p>
      </div>
      <div class="border border-dark-600 rounded-lg p-4">
        <strong class="text-sky-400">Backend</strong>
        <p class="text-neutral-400 mt-2">Valida dados, aplica autorização e preserva as regras de negócio.</p>
      </div>
    </div>
  </div>
  <div><h3 class="font-semibold text-emerald-400">Conceitos-chave</h3><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6"><div class="bg-dark-700 p-4 rounded-lg">problema</div><div class="bg-dark-700 p-4 rounded-lg">modelo mental</div><div class="bg-dark-700 p-4 rounded-lg">execução</div><div class="bg-dark-700 p-4 rounded-lg">evidência</div></div></div>
  <div class="flex justify-start mt-7"><button type="button" data-inema-read-toggle aria-pressed="false" class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"><span class="inema-read-icon" aria-hidden="true">○</span><span data-inema-read-label>Marcar como lido</span></button></div>
</section>
`;
