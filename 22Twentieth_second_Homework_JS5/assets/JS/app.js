
function calc() {
    let height = +yourHeight.value;
    let mass = +yourMass.value;
    let bodyIndexMass;

    console.log(`mass -${mass}`);
    console.log(`height -${height}`);

    if(height > 3) {
        bodyIndexMass = mass / ((height/100)**2);

        if(bodyIndexMass <= 16){
            result.innerHTML = "Выраженный дефицит массы тела"
        }
        
        if(bodyIndexMass > 16 && bodyIndexMass   <= 18.5){
            result.innerHTML = "Недостаточная (дефицит) масса тела"
        }
        
        if(bodyIndexMass > 18.5 && bodyIndexMass <= 25){
            result.innerHTML = "Норма"
        }
        
        if(bodyIndexMass > 25 && bodyIndexMass <= 30){
            result.innerHTML = "Избыточная масса тела (предожирение)"
        }
        
        if(bodyIndexMass > 30 && bodyIndexMass <= 35){
            result.innerHTML = "Ожирение 1 степени"
        }
        
        if(bodyIndexMass > 35 && bodyIndexMass <= 40){
            result.innerHTML = "Ожирение 2 степени"
        }
        
        if(bodyIndexMass > 40){
            result.innerHTML = "Ожирение 3 степени"
        }

    }   else {
            bodyIndexMass = mass / (height**2);

            if(bodyIndexMass <= 16){
                result.innerHTML = "Выраженный дефицит массы тела"
            }
            
            if(bodyIndexMass > 16 && bodyIndexMass   <= 18.5){
                result.innerHTML = "Недостаточная (дефицит) масса тела"
            }
            
            if(bodyIndexMass > 18.5 && bodyIndexMass <= 25){
                result.innerHTML = "Норма"
            }
            
            if(bodyIndexMass > 25 && bodyIndexMass <= 30){
                result.innerHTML = "Избыточная масса тела (предожирение)"
            }
            
            if(bodyIndexMass > 30 && bodyIndexMass <= 35){
                result.innerHTML = "Ожирение 1 степени"
            }
            
            if(bodyIndexMass > 35 && bodyIndexMass <= 40){
                result.innerHTML = "Ожирение 2 степени"
            }
            
            if(bodyIndexMass > 40){
                result.innerHTML = "Ожирение 3 степени"
            }    

        }
    

console.log(bodyIndexMass);

massIndex.innerHTML = Math.round(bodyIndexMass * 100) / 100;

}

// bodyIndexMass = bodyIndexMass

