$(function() {
    // 文字色を変える
    $('#change-color').on('click', function() {
        $('#target').css('color', 'green');
    });
    // 文字を変える
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');
    });
    // 文字をフェードアウトさせる
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });
    // 文字をフェードインさせる
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});