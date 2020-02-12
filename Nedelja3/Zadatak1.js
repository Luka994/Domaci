function max(brojevi) {
    return Math.max.apply(Math, brojevi);
}

let brojevi = [3,12,7];
console.log(max(brojevi));