# Validação da jornada de estudos

Data: 24/09/2026. Catálogo fictício com quatro cursos gratuitos. Objetivo: encontrar os dois cursos introdutórios sobre agentes, exibi-los e adicioná-los à lista temporária.

## Método

1. Começar com lista vazia e os quatro cursos visíveis.
2. Caminho por controles: preencher tema e nível, buscar e adicionar cada resultado.
3. Reiniciar a página. Caminho por callbacks: buscar, filtrar os IDs retornados, adicionar os IDs filtrados e consultar o estado final.
4. Comparar estado final, duplicações, erros e duração de cada execução.
5. Testar argumentos inválidos e sinal já cancelado; nenhuma mutação parcial deve ocorrer.

`npm test` verifica equivalência, idempotência, argumentos, cancelamento e isolamento das saídas. O ensaio de navegador usa automação de controles e callbacks locais; não há seleção de ferramentas por modelo, screenshots interpretados por IA, medição de tokens ou custo de agente. Não extrapolar os tempos para desempenho de IA.

## Suporte nativo

A página tenta registrar quatro ferramentas somente quando `document.modelContext.registerTool` existe. Falha no registro aborta os registros parciais. Sair da página aborta o ciclo de vida; voltar pelo cache de navegação refaz o registro. Ausência de API não impede uso manual.

Registro, descoberta, execução e resultado correto são evidências distintas. Um teste com API simulada verifica a integração do código, sem provar suporte nativo.

## Resultado observado

O ensaio em 24/09/2026 (horário local) passou em larguras de 1440 e 390 pixels, sem erros de página ou overflow horizontal. Interface e callbacks produziram a mesma lista, e a repetição não duplicou cursos.

No navegador 153.0.8010.36 com a feature experimental habilitada, as quatro ferramentas foram descobertas e executadas pela API nativa; o estado final correspondeu à interface. Essa implementação exigiu argumentos JSON serializados em `executeTool`, embora o snapshot do draft descreva objeto. Não extrapolar esse suporte para outras versões.

Também passaram os ensaios de ciclo de vida, rollback de registro parcial e validação das annotations (com stub explicitamente identificado). Os dados estão em [evidencia-jornada.json](evidencia-jornada.json). Os tempos são de execuções locais isoladas, sem significância estatística e dependentes do ambiente.

Para reproduzir, execute `node scripts/probe-jornada-browser.mjs` com a dependência de automação disponível. Os caminhos podem ser definidos por `PLAYWRIGHT_MODULE` e `CHROME_PATH`. O servidor temporário encerra ao final.
