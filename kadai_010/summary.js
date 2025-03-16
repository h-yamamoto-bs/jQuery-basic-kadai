$(function() {

    // id属性change-colorがクリックされたとき
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });

    // id属性change-textがクリックされたとき
    $('#change-text').on('click', function() {
       $('#target').text('Hello!');
    });

    // id属性fade-outがクリックされたとき
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // id属性fade-inがクリックされたとき
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });

});