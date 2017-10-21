$('#toggle_message').click(function () {
    var value = $('#toggle_message').after('');
    $('#message').toggle('fast');

    if (value == 'Hide') {
        $('#toggle_message').attr('value', 'show');
    }else if(value == 'Show'){
        $('#toggle_message').attr('value','Hide');

    }


});