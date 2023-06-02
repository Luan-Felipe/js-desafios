/*
    3- Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
    Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios,
    o salário a ser tranferido é calculado da seguinte maneira:

    valor bruto do salário - percentual do imposto mediante faixa salarial + adicional dos benefícios.

    Para calcular o percentual de impostos segue as aliquotas:

        De R$0.00 a R$1100.00 = 5.00%
        De R$1100.01 a R$2500.00 = 10.00%
        Mais que R$2500.00 = 15.00%

        Exemplo:
            Entrada:
                2000
                250

            Saída:
                2050.00
*/
const { gets, print } = require('./funcoes-auxiliares-ex3');

print(gets());