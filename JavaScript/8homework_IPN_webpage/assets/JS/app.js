
    import {createApp} from "https://unpkg.com/vue@3.2.31/dist/vue.esm-browser.js";

    const appConfig = {
        data(){
            return{
                inn: '',
                zodiacSign: [
                    { 
                        name: "Овен",
                        monthStart: 321,
                        monthEnd: 420, 
                    },
                    {
                        name: "Телец",
                        monthStart: 421,
                        monthEnd: 520,
                    }, 
                    { 
                        name: "Близнецы",
                        monthStart: 521,
                        monthEnd: 621,
                    }, 
                    { 
                        name: "Рак",
                        monthStart: 622,
                        monthEnd: 722,
                    }, 
                    { 
                        name: "Лев",
                        monthStart: 723,
                        monthEnd: 823,
                    }, 
                    { 
                        name: "Дева",
                        monthStart: 824,
                        monthEnd: 923,
                    }, 
                    { 
                        name: "Весы",
                        monthStart: 924,
                        monthEnd: 1023,
                    }, 
                    { 
                        name: "Скорпион",
                        monthStart: 1024,
                        monthEnd: 1122,
                    }, 
                    { 
                        name: "Стрелец",
                        monthStart: 1123,
                        monthEnd: 1221,
                    }, 
                    { 
                        name: "Козерог",
                        monthStart: 1222,
                        monthEnd: 120,
                    }, 
                    { 
                        name: "Водолей",
                        monthStart: 121,
                        monthEnd: 220,
                    }, 
                    { 
                        name: "Рыбы",
                        monthStart: 221,
                        monthEnd: 320,
                    }
                ],

                chinaZodSign: [
                    { 
                        name: "Обезьяна",
                        remainderDivision: 0
                    },
                    { 
                        name: "Петух",
                        remainderDivision: 1
                    },
                    { 
                        name: "Собака",
                        remainderDivision: 2
                    },
                    { 
                        name: "Кабан",
                        remainderDivision: 3
                    },
                    { 
                        name: "Крыса",
                        remainderDivision: 4
                    },
                    { 
                        name: "Бык",
                        remainderDivision: 5
                    },
                    { 
                        name: "Тигр",
                        remainderDivision: 6
                    },
                    { 
                        name: "Кролик",
                        remainderDivision: 7
                    },
                    { 
                        name: "Дракон",
                        remainderDivision: 8
                    },
                    { 
                        name: "Змея",
                        remainderDivision: 9
                    },
                    { 
                        name: "Лошадь",
                        remainderDivision: 10
                    },
                    { 
                        name: "Коза",
                        remainderDivision: 11
                    },
                ],

            }
        },
        
        methods :{ 
            onSubmit(){
                console.log(`inn`, this.inn);
            }
        },

        computed: {
            arrInn(){
                let arrInn = this.inn.toString().split('');
                return arrInn
            },
            // преобразование в массив

            countNumber(){
                let x = this.arrInn.length
                return x
            },
            // счетчик для отображения по ходу ввода ИНН (для проверки)

            sex() {
                if(this.arrInn.length >= 9){
                    if( this.arrInn[8] % 2 == 0 ){
                        return "женский";
                    } else {
                        return "мужской";
                    }
                }
            },
            // Определение Пола
             
            validation(){
                let sumForControl = (this.arrInn[0] * -1) + (this.arrInn[1] * 5) + (this.arrInn[2] * 7) + (this.arrInn[3] * 9) + (this.arrInn[4] * 4) + (this.arrInn[5] * 6)+ (this.arrInn[6] * 10) + (this.arrInn[7] * 5) + (this.arrInn[8] * 7);

                sumForControl = sumForControl - (Math.floor(sumForControl / 11) * 11);

                if(this.arrInn.length == 10 && sumForControl == this.arrInn[9]) {
                    return true;
                } else if (this.arrInn.length >= 10 && sumForControl !== this.arrInn[9]){
                    return false;
                };
            },
            //Валидация ИНН

            dateBirthday(){
                let dateBirthdayDays = this.arrInn.slice(0, 5).join('');
                let dateBirthday = new Date(1899, 11, (31+(+dateBirthdayDays)));

                return dateBirthday
            },

            birthday(){
                if(this.arrInn.length >= 6){
                    let dateBirthday = this.dateBirthday;
                    let arrDateBirthday = [dateBirthday.getDate(), dateBirthday.getMonth() + 1, dateBirthday.getFullYear()];

                    return arrDateBirthday.join('.');
                }
            },
            // Дата рождения

            age(){
                let dateBirthday = this.dateBirthday;
                let timeNow = new Date();
                let age = new Date().getFullYear() - dateBirthday.getFullYear();

                if(timeNow.getMonth() < dateBirthday.getMonth()) {
                    age = age - 1;
                } else {
                    if(timeNow.getDate() < dateBirthday.getDate()){
                        age = age - 1;
                    }
                }

                if(this.arrInn.length >= 6){
                    return age;
                }
            },
            // возраст

            zodiac(){
                if(this.arrInn.length >= 6){
                    let dateBirthday = this.dateBirthday;
                    let month = dateBirthday.getMonth() + 1;
                    let day = dateBirthday.getDate();

                    if(day <= 9){
                        day = "0" + day;
                    }

                    let dateZod = month.toString() + day.toString();
                    dateZod = +dateZod

                    for(let i in this.zodiacSign){
                        if(dateZod >= this.zodiacSign[i].monthStart && dateZod <= this.zodiacSign[i].monthEnd){
                            return this.zodiacSign[i].name
                        }
                        else if  ((dateZod >= 1222 && dateZod <= 1231) || (dateZod >= 100 && dateZod <= 120)){
                            return 'Козерог';
                        }
                    };
                };

            },

            chinaZod(){
                if(this.arrInn.length >= 6){
                    let yearB = this.dateBirthday.getFullYear();
                   
                    let zooYear = yearB % 12

                    for (let i in this.chinaZodSign){
                        if(zooYear == this.chinaZodSign[i].remainderDivision){
                            return this.chinaZodSign[i].name;
                        }
                    }
                }
            },

            
        },
        
    }

    

    const app = createApp(appConfig);
    app.mount('#app');