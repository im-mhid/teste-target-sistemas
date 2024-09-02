/**
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
 */

const invertString = text => {
  let reversedText = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return reversedText;
};

console.log(invertString("Hello, World!")); // !dlroW ,olleH
console.log(invertString("JavaScript")); // tpircSavaJ
