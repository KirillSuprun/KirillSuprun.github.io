
    const URL = "./data.json";

    let data = await fetch(URL);
        data = await data.json();

    console.log(data);

    let arrData1 = [data.devices];
    console.log(`arrData1`, arrData1);
    
    let arrData = arrData1[0];
    console.log(`arrData`, arrData);

    let arrInfo;
    
    



    // Функция определения дистанции

    function calculateDistance(UserLat, UserLong, TSOLat, TSOLong) {
        var EARTH_RADIUS = 6372795;
     
        let lat1 = UserLat * Math.PI / 180;
        let lat2 = TSOLat * Math.PI / 180;
        let long1 = UserLong * Math.PI / 180;
        let long2 = TSOLong * Math.PI / 180;
        console.log(`lat1`,lat1 );
        console.log(`lat2`,lat2 );
        console.log(`long1`,long1 );
        console.log(`long2`,long2 );

        let cl1 = Math.cos(lat1);
        let cl2 = Math.cos(lat2);
        let sl1 = Math.sin(lat1);
        let sl2 = Math.sin(lat2);
        console.log(`cl1`,cl1 );
        console.log(`cl2`,cl2 );
        console.log(`sl1`,sl1 );
        console.log(`sl2`,long2 );


        let delta = long2 - long1;
        let cdelta = Math.cos(delta);
        let sdelta = Math.sin(delta);
        console.log(`delta`,delta );
        console.log(`cdelta`,cdelta );
        console.log(`sdelta`,sdelta );
        
        let y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2));
        let x = sl1 * sl2 + cl1 * cl2 * cdelta;
        console.log(`y`,y );
        console.log(`x`,x );

        let ad = Math.atan2(y, x);
        let dist = Math.ceil(ad * EARTH_RADIUS);
        console.log(`ad`,ad );
        console.log(`dist`,dist );

        return dist;
        
    }
    
     // Функция определения дистанции
    
// Местоположение пользователя
    

    // let userPos = [];
    let okay = [];
    let lat = 0;
    let long = 0; 




    function success(pos){
        
        let crd = pos.coords;
        console.log(`crd`, crd);
        
        lat = crd.latitude;
        long = crd.longitude;
        
        console.log('Ваше текущее местоположение:');
        console.log(`Широта: ${lat}`);
        console.log(`Долгота: ${long}`);

        arrInfo = arrData.map(i => ({
            city: i.cityUA,
            Address: i.fullAddressUa,
            distance: calculateDistance(lat, long, i.latitude, i.longitude),
            opaa: console.log(i),
            latitudeOTS: i.latitude,
            longitudeOTS: i.longitude,
            place: i.placeUa,
            timeWork: i.tw,
            
        }
        ));
        console.log(`arrInfo`, arrInfo);

    }; 


    function fail(error){
        console.log(`Error`, error);
        alert('Не вдалось визначити Ваше місцезнаходження')
    }

    let geoP = navigator.geolocation.getCurrentPosition(success, fail);
    
    
    










// формула определения расстояния


// Преобразования Данных в масив с обьектами. 

// let arrData1 = [data.devices];
// console.log(`arrData1`, arrData1);

// let arrData = arrData1[0];
// console.log(`arrData`, arrData);

// let arrInfo = arrData.map(i => ({
//     city: i.cityUA,
//     Address: i.fullAddressUa,
//     latitude: i.latitude,
//     longitude: i.longitude,
//     place: i.placeUa,
//     timeWork: i.tw,
// }
// ));

// console.log(`arrInfo`, arrInfo);
// Преобразования Данных в масив с обьектами. 