function loopA(params) {
    let i = 0;
    while (i < 10) {
        i++;
        console.log("loop - ", i);
    }
}

function loopB(params) {
    for (let i = 0; i < 20; i++) { // muestra 0, luego 1, luego 2
        console.log("loopB - ", i);
    }
}

loopB()