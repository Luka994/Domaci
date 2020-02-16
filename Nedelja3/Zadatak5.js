var a = 0;
var add = function(valueToAdd) {
    a += valueToAdd;
    document.getElementById('Value').innerHTML = a;
}

var reset = function() {
    let a=0;
    document.getElementById('Value','Value1').innerHTML = 0;
}


var addButton = document.querySelector("#add");
var resetButton = document.querySelector("#reset1");

addButton.addEventListener("click", function() {
    add(1);
})

resetButton.addEventListener("click", function() {
    if (a <= 0) {
        window.alert ('Neispravan unos');
    }
    else {
        window.alert(`Narucili ste ${a} pica, ${d}`);
    }
    a=0;
    reset();
    reset1();
})

var a = 0;
var add1 = function(valueToAdd1) {
    a+= valueToAdd1;
    document.getElementById('Value1').innerHTML = a;
}

var reset1 = function() {
    let a=0;
    document.getElementById('Value1','Value').innerHTML = 0;
}


var addButton1 = document.querySelector("#add1");
var resetButton1 = document.querySelector("#reset2");
var d= new Date();
addButton1.addEventListener("click", function() {
    add1(1);
})
resetButton1.addEventListener("click", function() {
    
    if (a <= 0) {
        window.alert('Neispravan unos');
    }
    else {
        window.alert(`Narucili ste ${a} pica, ${d}`);
    }
    a=0;
    reset1();
    reset();
})
