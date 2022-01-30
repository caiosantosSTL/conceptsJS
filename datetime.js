function showNow(params) {
    let now = new Date()
    console.log("Now datetime is :", now);
}

function timeA(params) {
    let date = new Date("2017-01-26");
    console.log(date);
}

function timeB(params) {
    let date = new Date();

    console.log("Hours now ",date.getHours());
    console.log("Day now ", date.getMonth());
}

// ********************

showNow()

timeA()
timeB()
