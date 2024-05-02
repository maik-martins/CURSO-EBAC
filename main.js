$(document).ready(function() {
  // Adiciona uma tarefa à lista ao submeter o formulário
  $('#form-tarefa').submit(function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    var nomeTarefa = $('#nome-tarefa').val();
    if (nomeTarefa.trim() !== '') { // Verifica se o campo não está vazio
      var novaTarefa = $('<li></li>').append('<span class="task-name">' + nomeTarefa + '</span><button class="complete-btn">Concluir</button>');
      $('#lista-tarefas').append(novaTarefa);
      $('#nome-tarefa').val(''); // Limpa o campo de texto após adicionar a tarefa
    }
  });

  // Adiciona o efeito de linha através de text-decoration: line-through ao clicar em um item da lista
  $(document).on('click', '.complete-btn', function() {
    $(this).closest('li').find('.task-name').toggleClass('completed');
  });

  // Limpa a lista de tarefas ao clicar no botão "Limpar"
  $('#limpar-lista').click(function() {
    $('#lista-tarefas').empty();
  });
});
