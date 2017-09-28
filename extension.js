$(function() {
    var updateCounter = function() {
        var length = $('#tweet-box-global').text().length;
        $('#twitter-extension-my-140-back').text(length);
        $('#twitter-extension-my-140-back').css('color', length <= 140 ? 'green' : 'red');
    };

    if ($('#twitter-extension-my-140-back').length == 0) {
        $('body').append('<div id="twitter-extension-my-140-back" style="position: fixed;top: 15px;right: 10px;color: green;font-size: 30pt;z-index: 5000;"></div>');
        updateCounter();
    }
    setInterval(updateCounter, 100);
});
