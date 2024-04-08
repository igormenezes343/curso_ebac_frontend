$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit',function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`<input type="checkbox" id="tarefa">
        <li for ="tarefa">${nomeTarefa}</li>`);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');  
    })

})