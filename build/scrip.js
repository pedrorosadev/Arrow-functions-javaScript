"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
console.log('=========== Calculadora de IMC ===========\n');
var imc = function (weight, height) {
    var resultIMC = weight / (Math.pow(height, 2));
    return resultIMC;
};
var weight = Number(prompt('Peso: '));
var height = Number(prompt('Altura: '));
var resultIMC = imc(weight, height);
console.log("\nSeu IMC: ".concat(resultIMC.toFixed(2), "\n"));
if (resultIMC <= 18.5) {
    console.log('Classificação: Abaixo do Peso');
}
else if (resultIMC >= 18.5 && resultIMC <= 24.9) {
    console.log('Classificação: Peso Ideal');
}
else if (resultIMC >= 25 && resultIMC <= 29.9) {
    console.log('Classificação: Sobrepeso');
}
else if (resultIMC >= 30 && resultIMC <= 34.9) {
    console.log('Classificação: Obesidade Grau I');
}
else if (resultIMC >= 35 && resultIMC <= 39.9) {
    console.log('Classificação: Obesidade Grau II');
}
else if (resultIMC >= 40) {
    console.log('Classificação: Obesidade Grau III');
}
