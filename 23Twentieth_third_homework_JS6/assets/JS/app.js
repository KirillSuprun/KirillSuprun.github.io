
// let secret = Math.random() * 100 ;
// secret = Math.floor(secret) + 1;
// console.log(`${secret}`);

// let isFail = true;

// for(let i = 1; i <= 10; i++) {

// let variant = +prompt(`Ваш вариант (${i}/10)`);

// if(secret == variant) {
//     alert('Yes! you win');
//     isFail = false;
//     break;

// } else if(secret > variant) {
//     alert("My number Bigger");
// } else {
//     alert("My number Smaller");
// }

// }

// if(isFail){
// alert(`GAME OVER! Secret number is ${secret}`);
// }


    let secret = Math.random() * 100; 
    secret = Math.floor(secret) + 1;
    console.log(`${secret}`);

    let isFail = true;

    let lives = 10;

    function game(){

        let possibleAnswer = version.value;

        live.innerHTML = `${lives}`;

            if(secret == possibleAnswer) {
                // alert('Yes! you win');


                isFail = false;
            
            } else if(secret > possibleAnswer) {
                alert("My number Bigger");
                lives--;
                live.innerHTML = `${lives}`;
            } else {
                alert("My number Smaller");
                lives--;
                live.innerHTML = `${lives}`;
            }
        }

