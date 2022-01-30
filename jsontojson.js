function Ax(params) {
    let user = {
        name: "John",
        age: 30,

        toString() {
            return `{name: "${this.name}", age: ${this.age}}`;
        }
    };

    console.log(user);
}

function stringify(params) {
    let student = {
        name: 'John',
        age: 30,
        isAdmin: false,
        courses: ['html', 'css', 'js'],
        wife: null
    };

    let json = JSON.stringify(student); // convert to string 

    console.log(typeof json) // type of data

    console.log(json); // converted to string
}

Ax()

stringify()