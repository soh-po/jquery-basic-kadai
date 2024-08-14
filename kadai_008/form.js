$(function() {
    // クラスがbtnの要素がクリックされたら
    $('.btn').on('click', function() {
        let status = $('[class="text-box"]').val('クリックしました！'); 
    });
});