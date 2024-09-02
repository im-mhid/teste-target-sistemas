/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const billings = {
  1: 1000,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
  6: 0,
  7: 0,
  8: 2900,
  9: 3000,
  10: 100,
  11: 1100,
  12: 1200,
  13: 0,
  14: 0,
  15: 1500,
  16: 1600,
  17: 1900,
  18: 1800,
  19: 1700,
  20: 0,
  21: 0,
  22: 2200,
  23: 2300,
  24: 2400,
  25: 2500,
  26: 2600,
  27: 0,
  28: 0,
  29: 800,
  30: 900,
};

const filteredBillings = Object.values(billings).filter(value => value > 0);
const lowerBilling = Math.min(...filteredBillings);
const higherBilling = Math.max(...filteredBillings);
const averageBilling = Object.values(billings).reduce((acc, curr) => {
  if (curr > 0) {
    return acc + curr;
  }
  return acc;
}, 0);
const daysAboveAverageList = Object.entries(billings).reduce(
  (acc, [key, value]) => {
    if (value > averageBilling / filteredBillings.length) {
      acc[key] = value;
    }
    return acc;
  },
  {},
);

console.log(daysAboveAverageList);

console.log(lowerBilling); // 0
console.log(higherBilling); // 3000
console.log(daysAboveAverageList);
