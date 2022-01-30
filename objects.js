//let car = new Object()
let car = {
    brand: "Fiat",
    color: "blue"
}

console.log(car.brand);

delete car.brand

console.log("item deleted ", car.brand);

let carB = [
    {
        brand: "subaru",
        type: "rally",
        color: "blue"
    },
    {
        brand: "fiat",
        type: "sport",
        color: "red"
    },
    {
        brand: "fiat",
        type: "normal",
        color: "black"
    },
    {
        brand: "tesla",
        type: "sport",
        color: "black"
    },
]

for (let ix in carB){
    console.log(carB[ix], "\n");
    console.log("show brand ",carB[ix].brand, "\n");
}
