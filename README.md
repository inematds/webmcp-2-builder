# WebMCP Builder — Formação 2

Primeira fase prática da **Formação WebMCP — Sites e Agentes do Zero ao Expert**. O projeto ensina a sair do diagnóstico de prontidão e publicar ferramentas WebMCP declarativas e imperativas sem remover a experiência humana do site.

## O que está incluído

- 4 módulos completos, 24 tópicos e cerca de 12 horas de estudo;
- progresso, dúvidas, anotações, temas e exportação/importação da jornada;
- laboratórios por módulo e critérios de aceite;
- validador avançado de catálogos, tools e JSON Schemas;
- progressão para o repositório `webmcp-3-integrator`;
- geração estática pronta para GitHub Pages e Vercel.

## Módulos

1. WebMCP, MCP e a Web agêntica;
2. ambiente de desenvolvimento;
3. API declarativa;
4. API imperativa.

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

## Especificação e limites

WebMCP permanece em evolução. O conteúdo foi conferido em 30 de agosto de 2026 contra o [repositório oficial WebMCP](https://github.com/webmachinelearning/webmcp), a [especificação renderizada](https://webmachinelearning.github.io/webmcp/) e o [explainer da API declarativa](https://github.com/webmachinelearning/webmcp/blob/main/declarative-api-explainer.md).

O curso ensina `document.modelContext`, `registerTool()`, `getTools()`, `executeTool()` e ciclo de vida por `AbortSignal`. Não trata WebMCP como substituto do backend, de autorização ou de MCP.

## Progressão da formação

Todas as fases usam `<meta name="inema-course" content="webmcp-zero-expert">`. No GitHub Pages da organização, o estado local é compartilhado pela mesma origem. Para outros domínios, o aluno pode exportar e importar a jornada em JSON com merge não destrutivo.

Consulte [o contrato de entrega e passagem](docs/entrega-e-progressao.md).

## Licença

Código sob licença MIT. Conteúdo educacional © INEMA.
