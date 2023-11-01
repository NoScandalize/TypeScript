// 1 - tipo de objeto para função com interface

interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {

    console.log(`O nome do produto é ${product.name} e seu peso é R$${product.price}`)
    if(product.isAvailable) {
        console.log("O produto está disponível")
    } else {
        console.log("O produto NÃO está disponível")
    }

}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
}

showProductDetails(shirt);
showProductDetails({name: "Tênis", price: 129.99, isAvailable: false})

// 2 - propriedade opcional em interface

interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }

}

const user1: User = {email: "douglas@email.com", role: "Admin"};
const user2: User = {email: "aline@email.com"};

showUserDetails(user1);
showUserDetails(user2);

// 3 - readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca);

// fusca.wheels = 5;

// 4 - index signature

interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {x: 10}

coords.y = 15

console.log(coords);

// coords.z = "teste"

// 5 - extending interface

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const douglas: Human = {
    name: "Douglas",
    age: 24
}

console.log(douglas);

const saitama: SuperHuman = {
    name: "Saitama",
    age: 25,
    superpowers: ["Força", "Velocidade", "Resistência"]
}

console.log(saitama.superpowers[1]);

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold);

// 7 - readonly array

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];

// myArray[3] = "Mamão";

console.log(myArray);

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray);
// myArray[0] = "test";

// 8 - tupla

type fiveNumbers = [number, number, number, number, number];

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4 , 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3 , 4, 5, 6];
// const mixedArray: fiveNumbers = [1, true, "test", 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Douglas", 24];

console.log(anotherUser);

anotherUser[0] = "Aline";

console.log(anotherUser[0]);

// anotherUser[0] = 1

// 9 - tuplas com readonly

function showNumbers(numbers: readonly [number, number]) {
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);

}

showNumbers([1, 2]);