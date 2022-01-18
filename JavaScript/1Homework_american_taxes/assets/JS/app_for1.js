
console.log(`Hello`)

let sumIncome = +prompt("Введите Ваш доход за год");
const deduction = 12550;
let federalIncomeTax = 0;
let sumAmountDeduction = sumIncome - deduction;


console.log(`Сумма для расчета налогов со стандартным вычетом  - ${sumAmountDeduction} USD`);

let arrTaxLimit = [0, 9950, 40525, 86376, 164925, 209425, 523600, "Very Big Number",];
let taxPercent = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37]

if(sumAmountDeduction <= 0){
    federalIncomeTax = 0;
    console.log(`Федеральный подоходный налог - ${federalIncomeTax} USD`);
} else { 
    for (let i = 0; i < arrTaxLimit.length; i++){
        let startTaxLimit = arrTaxLimit[i];
        console.log(`start ${startTaxLimit}`);
        let endTaxLimit = arrTaxLimit[i + 1];
        console.log(`end ${endTaxLimit}`);
        let percent = taxPercent[i];

            if(sumAmountDeduction > endTaxLimit){
                federalIncomeTax = federalIncomeTax + ((endTaxLimit - startTaxLimit) * percent);
                console.log(`Налог с этого диапозона - ${federalIncomeTax} USD`)

            } else {
                federalIncomeTax = federalIncomeTax + ((sumAmountDeduction - startTaxLimit) * percent);
                break
            }



    }
}


console.log(`Федеральный подоходный налог - ${federalIncomeTax} USD`);






