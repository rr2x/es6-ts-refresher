var callbackNS;
(function (callbackNS) {
    var letMeKnowWhenComplete = function (size, callback) {
        var reducer = 0;
        for (var i = 1; i < size; i++) {
            reducer = Math.sin(reducer * i);
        }
        callback();
    };
    letMeKnowWhenComplete(100000000, function () { return console.log('Great it completed'); });
})(callbackNS || (callbackNS = {}));
