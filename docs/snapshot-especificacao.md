# Snapshot técnico usado no curso

Data de conferência: **30 de agosto de 2026**.

## Superfície imperativa

O draft define `document.modelContext` em contexto seguro e os métodos assíncronos:

```javascript
registerTool(tool, options)
getTools(options)
executeTool(registeredTool, inputObject, options)
```

Uma `ModelContextTool` possui `name`, `title` opcional, `description`, `inputSchema` opcional, `execute` e `annotations` opcionais. As annotations atuais são `readOnlyHint` e `untrustedContentHint`.

O `signal` fornecido a `registerTool` remove a tool quando abortado. O callback `execute` recebe outro `AbortSignal` para cancelamento da chamada em andamento.

## Superfície declarativa

O explainer propõe:

- `toolname` e `tooldescription` no formulário;
- `toolautosubmit` como atributo booleano;
- `name` e `toolparamdescription` nos controles;
- `SubmitEvent.agentInvoked` e `SubmitEvent.respondWith()`;
- estados visuais e eventos `toolactivated` e `toolcanceled`.

Partes da síntese de schema, da resposta após navegação e dos eventos declarativos continuam em debate. Por isso, exemplos declarativos devem ser tratados como experimentais e acompanhados de feature detection e fallback.

## Decisões editoriais

- não ensinar `navigator.modelContext` como API atual;
- não ensinar `unregisterTool()`; usar `AbortController`;
- não afirmar suporte universal;
- separar hints de segurança de autorização real;
- não executar tools dentro do validador estático.

## Fontes primárias

- [Repositório oficial](https://github.com/webmachinelearning/webmcp)
- [Especificação renderizada](https://webmachinelearning.github.io/webmcp/)
- [Explainer declarativo](https://github.com/webmachinelearning/webmcp/blob/main/declarative-api-explainer.md)
