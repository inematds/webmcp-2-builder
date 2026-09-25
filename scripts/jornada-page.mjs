export function jornadaPage({ head, nav, scripts }) {
return `${head({title:'Jornada de estudos — ações encadeadas com WebMCP', description:'Laboratório de busca, filtro e lista de estudos com ferramentas compartilhadas e evidências locais.', depth:'..'})}
<body class="bg-dark-900 text-neutral-100 min-h-screen">${nav('..')}
<main id="conteudo" class="journey-shell">
  <header><h1>Um pedido, uma lista de estudos</h1><p>Busque cursos introdutórios sobre agentes, filtre os gratuitos e adicione os resultados à sua lista. Faça a tarefa pelos controles ou acompanhe uma sequência de ferramentas.</p><p>Catálogo fictício. Todos os cursos deste exemplo são gratuitos. A lista existe apenas nesta aba e é descartada ao recarregar.</p></header>
  <div class="journey-columns">
    <section aria-labelledby="search-heading"><h2 id="search-heading">Explore o catálogo</h2>
      <form id="journey-search"><label for="journey-theme">Tema</label><input id="journey-theme" value="agentes" required maxlength="80">
      <label for="journey-level">Nível</label><select id="journey-level"><option value="iniciante">Iniciante</option><option value="avancado">Avançado</option></select>
      <label class="journey-check"><input id="journey-free" type="checkbox" checked> Somente gratuitos</label><button type="submit">Buscar cursos</button></form>
      <ul id="journey-results" class="journey-results" aria-live="polite"></ul>
      <h2>Minha lista de estudos</h2><p id="journey-list" aria-live="polite"></p>
    </section>
    <section aria-labelledby="sequence-heading"><h2 id="sequence-heading">Acompanhe as quatro chamadas</h2>
      <blockquote>“Busque cursos introdutórios sobre agentes, filtre os gratuitos e monte minha lista de estudos.”</blockquote>
      <p>O botão executa um roteiro fixo usando os mesmos callbacks das ferramentas. Não interpreta texto livre nem chama um modelo de IA.</p>
      <button id="journey-run" type="button">Executar sequência local</button> <button id="journey-reset" type="button" class="journey-secondary">Reiniciar</button>
      <p id="journey-message" role="status">Pronto para experimentar.</p><ol id="journey-trace" class="journey-trace" aria-label="Chamadas e retornos"></ol><p id="journey-time"></p>
      <p id="journey-native">Verificando suporte nativo…</p>
    </section>
  </div>
  <section class="journey-reading"><h2>O que esta experiência ensina</h2>
    <p><code>buscar_cursos</code> consulta dados; <code>filtrar_cursos</code> altera o que aparece na página; <code>adicionar_estudos</code> muda a lista; <code>consultar_jornada</code> verifica o estado final. O resultado de uma chamada fornece os IDs para a próxima.</p>
    <p>O botão e a ferramenta chamam a mesma operação. As duas entradas validam os argumentos, recusam IDs desconhecidos e evitam duplicação. As mutações locais têm <code>readOnlyHint: false</code>, mesmo sem gravar no servidor.</p>
    <h2>Metadados não concedem permissão</h2><p>O draft de 17/09/2026 descreve quatro annotations opcionais: <code>readOnlyHint</code>, <code>untrustedContentHint</code>, <code>consequentialHint</code> e <code>debugging</code>. Elas informam comportamento, conteúdo não confiável, ações com consequências e ferramentas de depuração. Não substituem validação, autorização ou confirmação de ações irreversíveis.</p>
    <p>O registro usa <code>AbortSignal</code> para encerrar o ciclo de vida da página. O callback verifica o sinal da execução antes de alterar o estado. Cancelar uma chamada não desfaz automaticamente efeitos já concluídos.</p>
    <h2>Como comparar sem inventar resultados</h2><p>Comece com a mesma lista vazia, execute a mesma tarefa e confira os IDs finais. Registre ambiente, tempo, falhas e número de interações. O teste incluído compara controles automatizados com callbacks locais; seleção por IA, screenshots, tokens e custo de modelo não são medidos. Uma tarefa real pode combinar ferramentas e inspeção visual.</p>
    <p><a href="../docs/validacao-jornada.md">Ver método e evidências de validação</a> · <a href="../assets/jornada-core.mjs">Ler operações e schemas</a> · <a href="validador-tools.html">Validar um catálogo</a></p>
  </section>
</main><footer class="journey-shell"><a href="../index.html">Voltar à formação</a></footer>
${scripts('..')}<script type="module" src="../assets/jornada-estudos.mjs"></script></body></html>`;
}
