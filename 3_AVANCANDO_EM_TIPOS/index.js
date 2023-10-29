"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = 'test';
const nomes = ["Matheus", "João"];
// nomes.push(4);
let bool = [true, false];
// 2 - outra sintaxe array
const nums = [111, 222, 333];
const str = ['test', 'teste'];
const boole = [true, false];
nums.push(300);
console.log(nums);
// nums.push("teste");
console.log(nums[0]);
// 3 - any
const arr1 = [1, 'test', true, [], { name: "Douglas" }];
console.log(arr1);
// 4 - parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b");
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Douglas"));
// 6 - função anônima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto
const obj = { name: "Douglas", age: 24 };
function passCoordiantes(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordiantes(objCoord);
// passCoordiantes({nome: 1, sobrenome: 2});
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(6)
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Douglas", "Wesley"));
console.log(advancedGreeting("Aline"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true)
const arr2 = [1, "teste"];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);
const somePerson = { name: "Matheus", age: 30 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
showDirection("center");
showDirection("right");
// 16 - non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
