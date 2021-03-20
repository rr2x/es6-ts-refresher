var nullishCoalescingNS;
(function (nullishCoalescingNS) {
    var val1 = undefined;
    var val2 = 10;
    // nullish coalescing:
    // if val1 is not null or undefined and has value return it
    // else, return val2
    var result = val1 !== null && val1 !== void 0 ? val1 : val2;
    console.log(result);
})(nullishCoalescingNS || (nullishCoalescingNS = {}));
