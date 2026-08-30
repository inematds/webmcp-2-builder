(() => {
  const states = {
    home: {
      title: 'Home pública',
      copy: 'A pessoa ainda está descobrindo o catálogo.',
      tools: ['buscar_cursos', 'abrir_categoria']
    },
    produto: {
      title: 'Página de curso',
      copy: 'Um curso específico está em contexto.',
      tools: ['ver_detalhes', 'escolher_turma', 'adicionar_carrinho']
    },
    carrinho: {
      title: 'Carrinho',
      copy: 'A pessoa revisa itens antes do checkout.',
      tools: ['alterar_quantidade', 'remover_item', 'iniciar_checkout']
    },
    conta: {
      title: 'Conta autenticada',
      copy: 'A sessão permite consultar dados da própria pessoa.',
      tools: ['consultar_pedidos', 'alterar_endereco']
    }
  };

  document.querySelectorAll('[data-catalog-state]').forEach(button => {
    button.addEventListener('click', () => {
      const demo = button.closest('[data-catalog-demo]');
      const state = states[button.dataset.catalogState];
      if (!demo || !state) return;

      demo.querySelectorAll('[data-catalog-state]').forEach(item => {
        const active = item === button;
        item.setAttribute('aria-pressed', String(active));
        item.classList.toggle('bg-emerald-600', active);
        item.classList.toggle('text-white', active);
        item.classList.toggle('bg-dark-700', !active);
      });

      demo.querySelector('[data-catalog-title]').textContent = state.title;
      demo.querySelector('[data-catalog-copy]').textContent = state.copy;
      const list = demo.querySelector('[data-catalog-tools]');
      list.replaceChildren(...state.tools.map(name => {
        const item = document.createElement('li');
        item.textContent = name;
        return item;
      }));
    });
  });
})();

