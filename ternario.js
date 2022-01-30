function ifs(params) {
    let year = 2021

    if (year < 2015) {
        console.log('Muy poco...');
    } else if (year > 2015) {
        console.log('Muy Tarde');
    } else {
        console.log('¡Exactamente!');
    }
}

// *** 

function ternario(params) {
    idade = 21

    idade >= 18 ? console.log("Maior") : console.log("Menor");
}

ifs()

ternario()