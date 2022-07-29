<template>
  <div class="weather_box mt-4 mb-4 d-flex flex-column justify-content-between">


    <div class="weather_location text-center pt-4 p-2"> 
        <span class="location"> {{location_name}} {{location_region}} {{location_country}} fsfd  </span>
    </div>
    <hr>
<!--  -->
    <div class="weather_time text-center">
        <h5> {{hours}}:{{minutes}}:{{seconds}} </h5>
        <h5> {{dateNow}}  </h5>
    </div>
    <hr>
<!--  -->
    <div class="weather_data text-center pb-4">
      <div class="weather_image text_center mb-3"> 
          <img class="weather_image_now" :src='weatherImage' alt="weather now">
          <h5> {{(weatherInfo.weather_descriptions)}} </h5>
      </div>
     <hr> 
              <!--  -->
      <div class="weather_info text-center p-3">

        <div class="temperature border_right text-center"> <span class="down_name"> Temperature </span> <p> {{ weatherInfo.temperature }}℃ </p> </div>

        <div class="feelsLike ms-1 border_right text-center"> <span class="down_name"> Feelslike</span> <p> {{ weatherInfo.feelslike }}℃ </p> </div>

        <div class="wind_speed ms-1 text-center "> <span class="down_name"> Wind speed</span> <p> {{ weatherInfo.wind_speed }}km/h </p> </div>

      </div>
    </div>

  </div>
</template>

<!--  -->

<script>
   import {weatherURL} from '@/links'


  export default {
    name: 'WeatherToday',
    data() {
      return {
         objWeather: {},
         location_name: '',
         location_region: '',
         location_country: '',
         dateNow: '',
         hours: 0,
         minutes: 0,
         seconds: 0,
         weatherInfo: [],
         weatherImage: '',
      }
    },

    async mounted(){
        let weatherData = await fetch(weatherURL);
            weatherData = await weatherData.json();
        
        console.log(`weatherData`,typeof weatherData, weatherData);

// Geoposition
        this.objWeather = weatherData;
        
        console.log(`objWeather`,typeof this.objWeather , this.objWeather);

        this.location_name = this.objWeather.location.name;
        this.location_region = this.objWeather.location.region;
        this.location_country = this.objWeather.location.country;
//  date
        let date = new Date().toDateString();
        
        this.dateNow = date;
        console.log(`this.dateNow`, this.dateNow);

// Weather data 
        this.weatherInfo = weatherData.current;
        this.weatherImage = this.weatherInfo.weather_icons[0];
        this.weatherInfo.weather_descriptions = this.weatherInfo.weather_descriptions[0];

        console.log(`this.weatherInfo`, this.weatherInfo);






// time 
        setInterval(() => this.setTime(), 1000);



    },

    computed: {

    },

    methods: {
      setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      },

      takeImg(){
         
      },  

    },  
  }
</script>

<!--  -->

<style scoped>

  hr{
    padding: 0.15rem;
    border-radius: 30px;
    background-image: linear-gradient(to right top, #000000, #3b3b3b, #777777, #b9b9b9, #ffffff);
  }

  .location{
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 25px;
  }



  div.weather_box{
    height: 500px;
    background: rgba(150,181,229,255);
    border-radius: 50px;
    /* border: 2px solid rgba(160, 10, 247, 0.425); */
    box-shadow: 0px 0px 20px rgb(94, 164, 230);
  }

  .weather_image_now{
    border-radius: 100%;
  }

  div.weather_info{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .down_name{
    font-size: 1.2rem;
    font-weight: 500;
  }

  /* .border_right{
      border-right: 1px solid gray;
      padding-right: 3%;
    } */

  hr{
    margin: 0 3rem;
  }

  @media (min-width: 998px){
    div.weather_info{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .border_right{
      border-right: none;
    }

    div.weather_box{
    height: 600px;
    }

    .location{
      font-size: 1.3rem;
      font-weight: 500;
      border-radius: 25px;
    }
  }

  @media (min-width: 1200px){
    div.weather_info{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

    /* .border_right{
      border-right: 1px solid gray;
      padding-right: 3%;
    } */
  }




</style>
