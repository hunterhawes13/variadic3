function sum() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
 console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(-10, -5, 1, 2) === -12)

sum(1, 2, 3)
sum.call(null, 1, 2, 3)
sum.apply(null, [1, 2, 3])

var sum123 = sum.bind(null, 1, 2, 3)
sum123()