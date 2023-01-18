$(document).ready(function(){


    $('#tarefas').change(function(){
        var tarefas = $(this).val();
        $('ul').append('<li>' + tarefas + '</li>');
        $(this).val('');
    })
    
    $(document).on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    })
})
