"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu peso é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
    else {
        console.log("O produto NÃO está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const user1 = { email: "douglas@email.com", role: "Admin" };
const user2 = { email: "aline@email.com" };
showUserDetails(user1);
showUserDetails(user2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = { x: 10 };
coords.y = 15;
console.log(coords);
const douglas = {
    name: "Douglas",
    age: 24
};
console.log(douglas);
const saitama = {
    name: "Saitama",
    age: 25,
    superpowers: ["Força", "Velocidade", "Resistência"]
};
console.log(saitama.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - readonly array
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão";
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3 , 4, 5, 6];
// const mixedArray: fiveNumbers = [1, true, "test", 4, 5];
console.log(myNumberArray);
const anotherUser = ["Douglas", 24];
console.log(anotherUser);
anotherUser[0] = "Aline";
console.log(anotherUser[0]);
// anotherUser[0] = 1
// 9 - tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
