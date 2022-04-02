
    const URL = "./data.json";

    let data = await fetch(URL);
        data = await data.json();

    console.log(data);

    let arrData1 = [data.devices];
    console.log(`arrData1`, arrData1);
    
    let arrData = arrData1[0];
    console.log(`arrData`, arrData);


    // Функция определения дистанции

    function calculateDistance(UserLat, UserLong, TSOLat, TSOLong) {
        var EARTH_RADIUS = 6372795;

        let lat1 = UserLong * Math.PI / 180;
        let lat2 = TSOLat * Math.PI / 180;
        let long1 = UserLat * Math.PI / 180;
        let long2 = TSOLong * Math.PI / 180;
        

        let cl1 = Math.cos(lat1);
        let cl2 = Math.cos(lat2);
        let sl1 = Math.sin(lat1);
        let sl2 = Math.sin(lat2);
        


        let delta = long2 - long1;
        let cdelta = Math.cos(delta);
        let sdelta = Math.sin(delta);
        
        
        let y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2));
        let x = sl1 * sl2 + cl1 * cl2 * cdelta;
      
        let ad = Math.atan2(y, x);
        let dist = Math.ceil(ad * EARTH_RADIUS);
        

        return dist;
    }
     // Функция определения дистанции

    //  Функция рендера 


    // функция рендера 
    function renderFun(arrRender){
        let renderTag = document.getElementById('renderMain');

        for(let i = 10; i > -1; i--){
            let divCreator = document.createElement('div');
            renderTag.insertAdjacentElement(`afterbegin`, divCreator);

            let renderSite = document.querySelector(`main   div`);
            renderSite.innerHTML = ` <div class="row row-cols-1 row-cols-xl-4">
                                        <div class="d-flex align-items-center">
                                            <h4> ${arrRender[i].Address} </h4>
                                        </div>
                                            
                                        <div class="ps-1 d-flex align-items-center text-center d-flex justify-content-center" >
                                            <h4> ${arrRender[i].distance} м. від Вас  </h4>
                                        </div>

                                        <div class="d-flex align-items-center text-center d-flex justify-content-center">

                                            <h4> ${arrRender[i].place} </h4>

                                        </div>

                                        <div>
                                            <img id='mapPlace' title="${arrRender[i].place}" class="maps" src=${arrInfo[i].map}>

                                        </div>
                                    </div>
                                    <hr>`
        console.log(`renderSite`, renderSite );
        }
    }
    
    // определения местоположения и сортировка массива с данными
    
    let arrInfo;

    let lat = 0;
    let long = 0; 

    function success(pos){
        
        let crd = pos.coords;
        console.log(`crd`, crd);
        
        lat = crd.latitude;
        long = crd.longitude;
        

        arrInfo = arrData.map(i => ({
            city: i.cityUA,
            Address: i.fullAddressUa,
            distance: calculateDistance(lat, long, i.latitude, i.longitude),
            latitudeOTS: i.latitude,
            longitudeOTS: i.longitude,
            place: i.placeUa,
            timeWork: i.tw,
            map: `https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=15&w=300&h=300&c=${i.longitude},${i.latitude}`,
            
        }
        ));
        console.log(`arrInfo`, arrInfo);

        
    

        // for (let i = 0; i < arrInfo.length - 1; i++){
        //     if (arrInfo[i].distance < arrInfo[i + 1].distance ) {
        //         let temp = arrInfo[i];
        //         arrInfo[i] = arrInfo[i + 1];
        //         arrInfo[i + 1] = temp;
        //     }
        // }

        
        for (let i = 0; i < arrInfo.length - 1; i++) {
            for (let j = 0; j < arrInfo.length - 1 - i; j++) {
                
                if (arrInfo[i].distance < arrInfo[j].distance ) {
                    let temp = arrInfo[i];
                    arrInfo[i] = arrInfo[j];
                    arrInfo[j] = temp;
                }
               
            }
        }

        console.log(`arrInfo`, arrInfo);

       renderFun(arrInfo);


    }
// определения местоположения и сортировка массива с данными
    

    function fail(error){
        console.log(`Error`, error);
        alert("Не вдалось визначити Ваше місцезнаходження. На сайті будуть наведені випадкові термінали самообслуговування")

        arrInfo = arrData.map(i => ({
            city: i.cityUA,
            Address: i.fullAddressUa,
            distance: "Не вдалося визначити", 
            latitudeOTS: i.latitude,
            longitudeOTS: i.longitude,
            place: i.placeUa,
            timeWork: i.tw,
            map: `https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=15&w=300&h=300&c=${i.longitude},${i.latitude}`,
         
        }));

        renderFun(arrInfo);

    }

    let geoP = navigator.geolocation.getCurrentPosition(success, fail);
    

























 // let renderTag = document.getElementById('renderMain');
        // for(let i = 10; i > -1; i--){
        //     let divCreator = document.createElement('div');
        //     renderTag.insertAdjacentElement(`afterbegin`, divCreator);

        //     let renderSite = document.querySelector(`main   div`);
        //     renderSite.innerHTML = ` <div class="row row-cols-1 row-cols-xl-4">
        //                                 <div class="d-flex align-items-center">
        //                                     <h4> ${arrInfo[i].Address} </h4>
        //                                 </div>
                                            
        //                                 <div class="ps-1 d-flex align-items-center text-center d-flex justify-content-center" >
        //                                     <h4> ${arrInfo[i].distance} м. від Вас  </h4>
        //                                 </div>

        //                                 <div class="d-flex align-items-center text-center d-flex justify-content-center">

        //                                     <h4> ${arrInfo[i].place} </h4>

        //                                 </div>

        //                                 <div>
        //                                     <img id='mapPlace' title="${arrInfo[i].place}" class="maps" src='https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=14&w=300&h=300&c=${arrInfo[i].longitudeOTS}, ${arrInfo[i].latitudeOTS}'>

        //                                 </div>
        //                             </div>
        //                             <hr>`
        // console.log(`renderSite`, renderSite );

        // }

















































