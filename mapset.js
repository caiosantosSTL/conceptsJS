// here we use a key or index value

function map(params) {
    let map = new Map();

    map.set('1', 'str1');   // key index is '1'
    map.set(1, 'num1');
    map.set(true, 'bool1');

    console.log(map.get(1)); // we get de value from key 1, and that value is 'num1'
    console.log(map.get('1')); // 'str1'

    console.log(map.size); // 3
}

function mapB(params) {
    var map = new Map()

    map.set('keya', 'valueA')
    map.set('keyb', 'valueB')
    map.set('keyc', 'valueC')
    map.set('keyd', 'valueD')

    console.log(map.has('keyc')); // true
    console.log(map.has('keyx')); // false
    console.log("there is that key keyd? ", map.has('keyd'));
    // delete key
    console.log(map.delete('keyd'));
    console.log("there is that key keyd? ", map.has('keyd'));
}

function mapC(params) {
    var people = [
        { name: "Nikol" },
        { name: "Lima" }
    ]

    let mapset = new Map()
    mapset.set('Nikol', 'OOOO')
    console.log(mapset.get('Nikol'));
    console.log(mapset.get('Lima'));

    for (let i in people) {
        console.log(people[i]);
    }
}

function setA(params) {
    let set = new Set();

    let john = { name: "John" };
    let pete = { name: "Pete" };
    let mary = { name: "Mary" };

    // visitas, algunos usuarios lo hacen varias veces
    set.add(john);
    set.add(pete);
    set.add(mary);
    set.add(john);
    set.add(mary);

    // set solo guarda valores únicos
    console.log("set size  ", set.size); // 3

    for (let user of set) {
        console.log(user.name); // John (luego Pete y Mary)
    }
}

function setB(params) {
    let set = new Set(["oranges", "apples", "bananas"]);

    for (let value of set) console.log("---- ",value);

    // lo mismo que forEach:
    set.forEach((value, valueAgain, set) => {
        console.log("***** ",value);
    });
}

map()

mapB()

mapC()

setA()

setB()