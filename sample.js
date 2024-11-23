// function demo() {
//     console.log("demo")
// }
// demo()

// let usename = "hashim";
// console.log(usename);


// let isStudent = true;
// let score = 95;
// console.log(isStudent, score); // Print both


// function addsum(number1, number2) {
//     console.log("total:" + (number1 + + number2));
// }

// addsum(5, 2);


// let numm = -8

// if (numm = 0) {
//     console.log("zero");

// } else if (numm >= 1) {
//     console.log("positive");
// } else{
//     console.log("negative");
// }


// function exampl(exp1, exp2){
//     return (exp1 + exp2);
// }

// let ddd = exampl(1,5)
// console.log(ddd)


function calculateTotal(price, quantity) {
    if (quantity == 0) {
        quantity = 1;
        console.log(price * quantity);
    } else {
        quantity = quantity;
        console.log(price * quantity);
    }


}

calculateTotal(8, 3);

let obj = { name: 'Alice' };
console.log(obj == '[object Object]'); // true



let UserName = ['hash', 'hack', 'sinan', 'hasiimsd', 'asjsdcnajk']


let filterName = UserName.filter(function (Nma) {
    if (Nma.length > 5) {
        return Nma
    }
}
);

console.log(filterName)

const numbers = [1, 2, 3, 4, 5];

// Filter numbers greater than 3
const filteredNumbers = numbers.filter((number) => number > 3);

console.log(filteredNumbers); // Output: [4, 5]

function printMessage(message) {
    console.log(message);
}

setTimeout(() => printMessage('This is a delayed message!'), 2000);

