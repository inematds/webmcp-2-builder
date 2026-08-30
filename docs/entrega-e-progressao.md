# Entrega e progressão — WebMCP Builder

## Resultado esperado

Ao terminar esta fase, o aluno consegue:

1. decidir quando WebMCP é apropriado;
2. manter fallback manual quando a API não está disponível;
3. instrumentar um formulário declarativo;
4. registrar tools imperativas com JSON Schema;
5. controlar registro e execução com `AbortSignal`;
6. entregar um catálogo pequeno, observável e revisável.

## Evidências obrigatórias

| Módulo | Entrega | Evidência mínima |
|---|---|---|
| 1.1 | Documento de arquitetura | comparação entre visual, API, MCP, WebMCP e composição |
| 1.2 | Ambiente com feature detection | teste com suporte, sem suporte e fallback |
| 1.3 | Formulário declarativo | validação, revisão humana e protocolo estruturado |
| 1.4 | Catálogo imperativo | três tools, UI atualizada, retorno e cancelamento |

## Portão para a Formação 3

A fase fica elegível quando:

- 24 tópicos estão marcados como lidos;
- quatro entregas possuem evidência registrada pelo aluno;
- o catálogo final foi analisado pelo validador;
- falhas críticas do relatório foram corrigidas;
- o aluno exportou a jornada ou confirmou que continuará na mesma origem.

O conteúdo da próxima fase pode ser consultado antes do portão. A ordem é requisito de certificação, não bloqueio artificial de estudo.

## Transporte do estado

O namespace é `inema.webmcp-zero-expert.*`. As páginas usam IDs estáveis como:

```text
modulo-1-1#topico-1
modulo-1-4#topico-6
```

No GitHub Pages, os repositórios da organização são caminhos sob `inematds.github.io`, portanto compartilham a origem e o `localStorage`. Em domínio distinto, use exportação/importação JSON. Um handoff assinado por backend fica reservado para a evolução da plataforma; o estado completo nunca deve ser colocado na URL.

## Próxima fase

`webmcp-3-integrator` aprofundará design de tools, erros e recuperação, migração de sites existentes e integração com frameworks. Seu scanner avançado deverá percorrer múltiplas páginas e usar sitemap como fila de descoberta, sem atribuir ao sitemap uma capacidade WebMCP que ele não possui.
