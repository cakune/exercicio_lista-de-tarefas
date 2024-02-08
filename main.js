$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const novaTarefa = $('#nova-tarefa').val();
        console.log(novaTarefa);
        const novoItem = $(`<li> ${novaTarefa} </li>`);
        $(novoItem).appendTo('#minha-lista');
        $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('');

        $("li").each(function(i) {
            $(this).click(function() {
                $(this).toggleClass("crossOut");
            });
        });
    })

})