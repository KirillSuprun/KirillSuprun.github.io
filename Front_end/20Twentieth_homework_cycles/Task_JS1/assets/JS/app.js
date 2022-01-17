
    alert("Данная страница определяет простое ли введеное целое число");
    let x = +prompt("Введите целое число для проверки");
    console.log(`Число - ${x}`)

    let prime_number = true;
     
    
    for(let i = 2; i < (x - 1); i++) {
        console.log(` I = ${i}`);
        let operation = x % i;
        // console.log(` I = ${i}`);
        console.log(`${x} % ${i}`);
        console.log(`Operation = ${operation}`);

        if(operation == 0) {
            console.log(`${operation}`)
            prime_number = false;
            alert(`Число ${x} - не простое`)
            break; 
        }
        // else {
        //     continue;
        // }


    }
    
    if(prime_number){
        alert(`Число ${x} Простое`);
    }