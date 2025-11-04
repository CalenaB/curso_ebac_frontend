$(document).ready(function(){
    $('#lista').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        if (tarefa.trim() === '') return;

        const novoItem = $('<li style="display: none"></li>').text(tarefa);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);

            $('#tarefa').val('');

            $('ul').on('click', 'li', function() {
            $(this).toggleClass('linha-passada');
            });
        })
})