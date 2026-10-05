# WebMCP Builder — Formação 2

Formação prática dedicada ao papel **WebMCP Builder**. O projeto ensina a sair do diagnóstico de prontidão e publicar ferramentas WebMCP declarativas e imperativas sem remover a experiência humana do site.

## O que está incluído

- arquitetura de 4 capítulos Builder, cada um com seus próprios módulos;
- Capítulo 1 publicado com 4 módulos completos, 24 tópicos e cerca de 12 horas;
- progresso, dúvidas, anotações, temas e exportação/importação da jornada;
- mini-site INEMA Cursos para comparar pessoa, automação visual e WebMCP;
- validador avançado de catálogos, tools e JSON Schemas;
- geração estática pronta para GitHub Pages e Vercel.

## Capítulos e módulos

O menu superior navega pelos capítulos da formação Builder. A numeração segue `capítulo.módulo`: `1.1`, `1.2`, `2.1` e assim por diante.

O Capítulo 1 está publicado com estes módulos:

1. WebMCP, MCP e a Web agêntica;
2. ambiente de desenvolvimento;
3. API declarativa;
4. API imperativa.

Os capítulos 2 (Design de ferramentas), 3 (Integração com a aplicação) e 4 (Qualidade de Builder) já estão mapeados no índice e serão publicados progressivamente.

## Executar localmente

```bash
npm run build
npm test
npm run serve
```

Abra `http://localhost:4173`. O curso também é legível abrindo `index.html`, mas um servidor local representa melhor o contexto de execução.

## Validador avançado

O laboratório em `labs/validador-tools.html` recebe um descritor JSON auditável. Ele verifica:

- unicidade, nomes, títulos e descrições;
- estrutura de `inputSchema`;
- coerência de `required` e `properties`;
- annotations do draft;
- evidência de `AbortSignal`;
- risco, confirmação humana, fallback e exemplo de resultado.

O scanner é local, determinístico e não registra nem executa tools. Campos de governança como `risk`, `fallback` e `resultExample` não pertencem ao draft WebMCP; servem para revisar prontidão operacional.

## Laboratório do Módulo 1.1

`labs/inema-cursos.html` mantém a mesma busca em três modos: pessoa, agente visual e WebMCP. A chamada do agente é uma simulação didática explicitamente identificada; em ambientes compatíveis, a página também tenta registrar `buscar_cursos` pela API real.

## Especificação e limites

WebMCP permanece em evolução. O conteúdo foi conferido em 24 de setembro de 2026 (draft de 17/09/2026) contra o [repositório oficial WebMCP](https://github.com/webmachinelearning/webmcp), a [especificação renderizada](https://webmachinelearning.github.io/webmcp/) e o [explainer da API declarativa](https://github.com/webmachinelearning/webmcp/blob/main/declarative-api-explainer.md).

O curso ensina `document.modelContext`, `registerTool()`, `getTools()`, `executeTool()` e ciclo de vida por `AbortSignal`. Não trata WebMCP como substituto do backend, de autorização ou de MCP.

## Progressão da formação

Todas as fases usam `<meta name="inema-course" content="webmcp-zero-expert">`. No GitHub Pages da organização, o estado local é compartilhado pela mesma origem. Para outros domínios, o aluno pode exportar e importar a jornada em JSON com merge não destrutivo.

Consulte [o contrato de entrega e passagem](docs/entrega-e-progressao.md).

## Licença

Código sob licença MIT. Conteúdo educacional © INEMA.

## Laboratório de ações encadeadas

Abra `labs/jornada-estudos.html` para buscar, filtrar, adicionar e conferir uma lista de estudos fictícia. Interface e ferramentas compartilham operações validadas. A sequência local é um roteiro determinístico, sem modelo de IA; o registro nativo é detectado separadamente. Veja [método e evidências](docs/validacao-jornada.md).

O validador considera as quatro annotations opcionais do draft: `readOnlyHint`, `untrustedContentHint`, `consequentialHint` e `debugging`. Hints não são autorização.

## Mais no INEMA.CLUB

- [Ficha completa](https://www.inema.club/cursos/247-formacao-webmcp-2-builder/)
- [Guia de aprendizagem](https://www.inema.club/aprender-inteligencia-artificial/)
- [Catálogo de cursos](https://www.inema.club/cursos/)

<!-- inema-backlink:v1 -->
## Mais no INEMA.CLUB

- [Ficha completa deste curso](https://www.inema.club/cursos/247-formacao-webmcp-2-builder/)
- [Guia: como aprender inteligência artificial](https://www.inema.club/aprender-inteligencia-artificial/)
- [Todos os cursos](https://www.inema.club/cursos/)
<!-- /inema-backlink:v1 -->
