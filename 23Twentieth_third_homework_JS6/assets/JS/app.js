


    let secret = Math.random() * 100; 
    secret = Math.floor(secret) + 1;

    let isFail = true;

    let lives = 10;

    function game(){

        let possibleAnswer = version.value;

        if(lives < 1){
            endGame.classList.add(`animate__animated`);
            endGame.classList.add(`animate__flash`);
            endGame.innerHTML = `Проигрыш! У Вас закончились попытки! Мое загаданое число - ${secret}`;
            endGame.style.color = `red`;

            return
        }

        else{

            if(secret == possibleAnswer) {
               
                userVersion.innerHTML = `- ${possibleAnswer}.`;
                endGame.classList.add(`animate__heartBeat`);
                endGame.classList.add(`animate__heartBeat`);
                endGame.innerHTML = `Победа! Вы угадали загаданное число!`;
                endGame.style.color = `green`;

                gameBut.classList.add(`invisible`);
                
                return
                
            
            } else if(secret > possibleAnswer) {
                
                lives--;
                live.innerHTML = `${lives}`;
                userVersion.innerHTML = `- ${possibleAnswer}. Загаданное число больше`;
            } else {
                
                lives--;
                live.innerHTML = `${lives}`;
                userVersion.innerHTML = `- ${possibleAnswer}. Загаданное число меньше`;
            }
        }

    }

