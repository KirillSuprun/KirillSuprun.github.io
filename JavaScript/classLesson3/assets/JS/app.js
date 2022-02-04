
// 111111111111111111111111111111111111111111

    // const tariff = 35;

    // const parcelProto = {
    //     calcVolume: function () {
    //         return this.width * this.height * this.length;
    //     },
    //     calcCost: function(t){
    //         return this.calcVolume() * t;
    //     },

    //     toString() {
    //         return `width${this.width} height${this.height} length${this.length}`;
    //     },

    //     valueOf(){
    //         return this.calcVolume();
    //     }

    // }

    
    // function CreateParcel(w, h, l){
    //     this.width = w,
    //     this.height = h,
    //     this.length = l,
    //     this.__proto__ = parcelProto
    // }

  ///  // function createParcel(w, h, l){
  //  //     let parcel = {
  //  //         width: w,
  //  //         height: h,
  //  //         length: l,
  //  //         // calcVolume: function () {
  //  //         //     return this.width * this.height * this.length;
  //  //         // },
  //  //         // calcCost: function(t){
  //  //         //     return this.calcVolume() * t;
  //  //         // },
  //  //         __proto__: parcelProto,

  //  //     }
    
  //  //     return parcel;
  //  // }

    // let a = new CreateParcel(3, 4, 5);
    // // let b = new CreateParcel(6, 7, 10);

    // console.log(`Parcel A: ${a}`)

    // console.log(`Parcel A:${a.calcVolume()} m*3 Parcel A:${a.calcCost(tariff)} $`);
    // console.log(`Parcel B:${b.calcVolume()} m*3, Parcel B:${b.calcCost(tariff)} $`);


   //////////////////////////////////////////////// let width = 4;
    /////////////////////////////////// let height = 3;
   ////////////////////////// // let length = 7;

   //////////////////// // function calcVolume(p) {
  /////////////////////////////////  //     return p.width * p.height * p.length;
  ///////////////////  // }

 /////////////////////////   // function calcCost(p, t){
 /////////////////   //     return calcVolume(p) * t;
   ////////////////////////// // }



    // console.log(parcel.calcVolume(), `m*3`);
    // console.log(parcel.calcCost(tariff), '$');



// 111111111111111111111111111111111111111111

// 2222222222222222222222222222222222222222222222

    // setInterval(function(){

    // let dNow = new Date();
    // let dNY = new Date(2023, 0, 1, 0, 0, 0);

   
    // console.log(+dNY);
    // console.log(+dNow);

    // let diff = (dNY - dNow);
    //     diff = Math.round(diff/1000);

    //     countdown.innerHTML = `До НГ: ${diff} сек.`

    // }, 1000)

    // console.log( diff );
    // diff = diff / 60 / 60;

    // diff = diff / 24;

    // console.log(Math.floor(diff));
  

    // // d.setDate(d.getDate() + 100);

    // // console.log(d);


    // // console.log(d.getUTCFullYear(), d.getMonth() /* номер месяца с 0 */ + 1, d.getDay() /* День недели с 0 */, d.getDate(), `time`, d.getHours(), d.getMinutes(), d.getSeconds());
    // // console.log(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());
    
// 22222222222222222222222222222222222222222222222

// 33333333333333333333333333333333333333333333333333

// let set = new Set();
// set.add('Ivan');
// set.add('Elena');
// set.add('Olga');
// set.add('Petr');

// console.log( set.has(`Elena`) );

// console.log(set);
// console.log(set.size);

// let arr = [...set];

// console.log(arr);


// 333333333333333333333333333333333333333333333333333


// 444444444444444444444444444444444444444444444444444

    // let data = ['Ivan', 'Elena', 'Olga', 'Maria', 'Elena', 'Ivan', 'Petr'];
    // console.log('data1', data);

    // let set = new Set(data);
    // console.log(set);

    // data = [...set];
    // console.log('data2', data);

// 44444444444444444444444444444444444444444444444444444

// 555555555555555555555555555555555555555555555555555555

    // console.log(globalThis);
    // globalThis.alert('Hello');

    // function action(){
    //     console.log(this);
    // }



// 55555555555555555555555555555555555555555555555555555

// 666666666666666666666666666666666666666666666666666666
                // Метод ЛУНА

    // let  card = '3539477434274733939';
    // console.log(card);

    // card = card.split('').reverse().map(i => +i);
    // console.log(card);


    // let sum = 0;

    // for(let i = 0; i < card.length; i++){
        
    //     if(i % 2 == 0){
    //         sum = sum + card[i];
    //     } else {
    //         let double = card[i] * 2;
    //         sum = sum + (double > 9 ? double - 9 : double);
    //     } 
    // }   
    
    // console.log(sum);

    // let isCorrect = sum % 10 == 0;
    
    // console.log(`Is Correct:`, isCorrect);


// 6666666666666666666666666666666666666666666666666666666

// 7777777777777777777777777777777777777777777777777777777

    // TDD - Test Driven Development

    // function sum(a, b) {
    //     return a + b;
    // }

    // function mul(a, b){
    //     return a * b;
    // }

    // export {sum, mul};

    // console.log( sum(2, 3) );


    // console.assert(sum(2,3) === 5, /* Если условие выполняеться, то больше ничего не показывается. Если условие не выполняеться, то пишеться всё после запятой как ошибка в КОНСОЛЕ БРАУЗЕРА */ `ALARM!!! "sum(2, 3) !== 5" is FAIL!` )

    // if(sum(2,3) !== 5){
    //     console.log(`ALARM!!! "sum(2, 3) !== 5" is FAIL!`)
    // }

// 77777777777777777777777777777777777777777777777777777777

// let timeNow = new Date();
// let age = new Date().getFullYear() - (new Date().getFullYear() - 20); 
    
//     if(timeNow.getMonth() < timeNow.getMonth()) {
//         age = age - 1;
//     } else {
//         if(timeNow.getDate() < (timeNow.getDate() -1) ){
//             age = age - 1;
//         }
//     }
//     console.log(`Полных Лет - ${age}`);