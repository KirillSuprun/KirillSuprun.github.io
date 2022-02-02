
    let inn = +prompt(`Введите Ваш ИНН гражданина Украины для проверки (10цифр)`);
    console.log("ИНН", inn);

    let innString = inn.toString();
    console.log(`строка`, innString);
    console.log(`Длинна строки`, innString.length);

    let arrInn = innString.split('');
    console.log('Масивом', arrInn);

    let sumForControl = (arrInn[0] * (-1)) + (arrInn[1] * 5) + (arrInn[2] * 7) + (arrInn[3] * 9) + (arrInn[4] * 4) + (arrInn[5] * 6)+ (arrInn[6] * 10) + (arrInn[7] * 5) + (arrInn[8] * 7);  
    //                 -3                *20(17)          +56(73)         +27(100)          +8(108)             0(108)         +20(128)          +10(138)            +56(194)
    console.log(`Сумма по формуле - Х = А*(-1) + Б*5 + В*7 + Г*9 + Д*4 + Е*6 + Ж*10 + З*5 + И*7 = ${sumForControl}`);

    sumForControl = Math.floor(sumForControl / 11);
    console.log(`Сумма деленная на 11 = ${sumForControl}`);

    let controlNumber = (sumForControl * 11).toString().split('').reverse();
    console.log(`Контрольное число в реверсе -`, controlNumber);
    console.log(`Контрольная цифра для проверки действительности ИНН`,controlNumber[0]);

    console.log(controlNumber[0], `=?`, arrInn[9]);

    let answer = {};    


if(innString.length != 10 || controlNumber[0] !== arrInn[9]){
    console.log('Инн некорректный');
    alert("Вы ввели некорректный ИНН, попробуйте еще раз");
    


} else {
    console.log(`Инн прошел проверку на подлинность`);
    alert(`Инн прошел проверку на подлинность`);

    // Определение пола
    if( arrInn[8] % 2 == 0 ){
        console.log(`Пол владельца ИНН - женский`);
        answer["sex"] = "женский";
    } else {
        console.log(`Пол владельца ИНН - мусжкой`);
        answer["sex"] = "женский";
    }
    // Определение пола
    console.log('Обьект с ответами', answer);



}


