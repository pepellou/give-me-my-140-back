$(function() {
    var updateCounter = function() {
        var tweetLength = $('#tweet-box-global').text().length;
        var counter = $('#twitter-extension-my-140-back');
        var tweetButton = $('#global-tweet-dialog-dialog .tweet-button > button');

        counter.text(tweetLength);
        if (tweetLength <= 140) {
            counter.css('color', 'green');
            tweetButton.removeAttr("disabled");
        } else {
            counter.css('color', 'red');
            tweetButton.attr("disabled", true);
        }
    };

    var styles = 'color: green; font-size: 24px; z-index: 5000; height: 30px; margin-top: -30px; float: right; margin-right: 120px;';

    if ($('#twitter-extension-my-140-back').length == 0) {
        $('#global-tweet-dialog .modal-tweet-form-container').append('<div id="twitter-extension-my-140-back" style="' + styles + '"></div>');
        updateCounter();
    }
    setInterval(updateCounter, 100);
});
