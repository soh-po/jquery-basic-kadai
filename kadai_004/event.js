$(function() {
    // HTMLドキュメント読み込み完了後に出力
    $(window).on('load', function() {
        console.log('loadイベントが発生しました');
    });
    // 画面をスクロールした際に出力
    $(window).on('scroll', function() {
        console.log('scrollイベントが発生しました');
    });
});