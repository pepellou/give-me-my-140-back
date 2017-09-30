$(function() {
    var updateCounter = function() {
        var tweetLength = $('#tweet-box-global').text().length;
        var counter = $('#twitter-extension-my-140-back');
        var tweetButton = $('#global-tweet-dialog-dialog .tweet-button > button');

        counter.text(tweetLength);
        if (tweetLength <= 140) {
            counter.css('color', 'green');
            tweetButton.removeAttr("disabled");
            tweetButton.css('opacity', 1);
        } else {
            counter.css('color', 'red');
            tweetButton.attr("disabled", true);
            tweetButton.css('opacity', 0.3);
        }
    };

    var styles = {
        'float': 'right',
        'color': 'green',
        'height': '30px',
        'z-index': '5000',
        'font-size': '24px',
        'margin-top': '-30px',
        'margin-right': '120px'
    };

    if ($('#twitter-extension-my-140-back').length == 0) {
        var tweetBox = $('#global-tweet-dialog .modal-tweet-form-container');

        tweetBox.append('<div id="twitter-extension-my-140-back"></div>');
        $('#twitter-extension-my-140-back').css(styles);

        updateCounter();
    }

    setInterval(updateCounter, 100);
});
