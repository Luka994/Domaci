function max() {
    var i;
    var max = -Infinity;
    for(i=0;i<arguments.length;i++) {
        if (arguments[i]>max) {
            max = arguments[i];
        }
    }
    return max;
}

x = max(9,17,22);
console.log(x);