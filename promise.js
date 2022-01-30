function resolveF(params) {
    let promise = new Promise(function (resolve, reject) {
        // la función se ejecuta automáticamente cuando se construye la promesa

        // después de 1 segundo, indica que la tarea está hecha con el resultado "hecho"
        setTimeout(() => resolve("hecho"), 1000);
    });
}


function rejectF(params) {
    let promise = new Promise(function (resolve, reject) {
        // después de 1 segundo, indica que la tarea ha finalizado con un error
        setTimeout(() => reject(new Error("¡Vaya!")), 1000);
    });
}


// ** ** 

rejectF()
