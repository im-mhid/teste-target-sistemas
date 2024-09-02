//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isFibonacci(n) {
  let penultimate = 0,
    last = 1,
    result = 0;
  for (let i = 0; i <= n; i++) {
    result = penultimate + last;
    penultimate = last;
    last = result;
    if (result === n) {
      return `O número ${n} pertence a sequência de Fibonacci`;
    }
  }
  return `O número ${n} não pertence a sequência de Fibonacci`;
}

console.log(isFibonacci(21)); // true
console.log(isFibonacci(22)); // false
