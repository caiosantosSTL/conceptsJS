

// set timeout

function timeout(params) {
    console.log("before ********");

    setTimeout(function (params) {
        console.log("****** 1s");
    }, 1000)

    setTimeout(function (params) {
        console.log("****** 2s");
    }, 2000)

    console.log("alfer ********");
}


// set interval

function interval(params) { // loop
    setInterval(() => {
        console.log("*****5s interval");
    }, 5000);
}


// exec

timeout()

interval()

