"use strict";
// 1 - importação de arquivos
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
// 2 - import de variavel
const variable_1 = require("./variable");
console.log(variable_1.x);
// 3 - multiplas importações
const multiple_js_1 = require("./multiple.js");
console.log(multiple_js_1.a);
console.log(multiple_js_1.b);
(0, multiple_js_1.myFunction)();
// 4 - alias
const changename_js_1 = require("./changename.js");
console.log(changename_js_1.someName);
// 5 - import all
const myNumbers = __importStar(require("./numbers.js"));
console.log(myNumbers);
const nX = myNumbers.n1;
const nY = myNumbers.n2;
const nZ = myNumbers.n3;
console.log(nX, nY, nZ);
myNumbers.showNumbers();
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const aline = new User("Aline", 25);
console.log(aline);
