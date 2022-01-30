function show(num) {
    console.log("valor: "+ num);
}

function som(a, b) {return a + b}
function somCallback(a, b, callback) {callback(a + b) }

function mult(a, b) {return a*b}
function multCb(a, b, cb) {var op = a*b; cb(op)}


console.log(somCallback(1,3, show));
console.log(multCb(2,3, show));