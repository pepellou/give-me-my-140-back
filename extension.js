$(function() {
    var updateCounter = function() {
        var length = $('#tweet-box-global').text().length;
        $('#twitter-extension-my-140-back').text(length);
        $('#twitter-extension-my-140-back').css('color', length <= 140 ? 'green' : 'red');
    };

    var styles = 'color: green; font-size: 24px; z-index: 5000; height: 30px; margin-top: -30px; float: right; margin-right: 120px;';

    if ($('#twitter-extension-my-140-back').length == 0) {
        $('#global-tweet-dialog .modal-tweet-form-container').append('<div id="twitter-extension-my-140-back" style="' + styles + '"></div>');
        updateCounter();
    }
    setInterval(updateCounter, 100);
});
