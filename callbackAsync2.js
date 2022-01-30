

// set timeout


function timeoutClear(params) {
    var x = 0

    var myTempo = setTimeout(function (params) {
        console.log("x == 0");
    }, 3000)

    x = 2

    if(x > 0){
        clearTimeout(myTempo)
        console.log("x is not 0");
    }
}


// set interval

function intervalClear(params) { // loop

    var myTempo = setInterval(() => {
        console.log("*/*/*/**/");
    }, 500);

    setTimeout(() => {
        console.log("not necessary");
        clearInterval(myTempo)
    }, 1500);
}


// exec

//timeoutClear()

intervalClear()

