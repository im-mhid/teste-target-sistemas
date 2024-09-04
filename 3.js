/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const billings = require("./dados.json");

const filteredBillings = Object.values(billings).filter(
  value => value.valor >= 1,
);
const lowerBilling = filteredBillings.reduce((acc, curr) => {
  if (curr.valor < acc.valor || acc.valor === undefined) {
    return curr;
  }
  return acc;
}, {});

const higherBilling = filteredBillings.reduce((acc, curr) => {
  if (curr.valor > acc.valor || acc.valor === undefined) {
    return curr;
  }
  return acc;
}, {});

const averageBilling = Object.values(billings).reduce((acc, curr) => {
  if (curr.valor >= 1) {
    return acc + curr.valor;
  }
  return acc;
}, 0);
const daysAboveAverageList = Object.entries(billings).reduce(
  (acc, [key, value]) => {
    if (value.valor > averageBilling / filteredBillings.length) {
      acc[value.dia] = value;
    }
    return acc;
  },
  {},
);

console.log(
  `O menor faturamento foi de ${lowerBilling.valor} no dia ${lowerBilling.dia}`,
);
console.log(
  `O maior faturamento foi de ${higherBilling.valor} no dia ${higherBilling.dia}`,
);
console.log(daysAboveAverageList);
