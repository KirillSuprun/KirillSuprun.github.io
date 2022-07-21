<template>
  <div class="weather_box mt-4 mb-4 d-flex flex-column justify-content-between">


    <div class="weather_location text-center pt-4 p-2"> 
        <h5> {{location_name}} {{location_region}} {{location_country}}   </h5>
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
      <div class="weather_image text_center"> 
          <img class="weather_image_now" :src='weatherImage' alt="weather now">
          <h5> {{(weatherInfo.weather_descriptions)}} </h5>
      </div>
      <hr>
              <!--  -->
      <div class="weather_info p-3">

        <div class="temperature border_right"> <h5> Temperature </h5> {{ weatherInfo.temperature }}℃ </div>

        <div class="feelsLike border_right"> <h5> Feelslike</h5> {{ weatherInfo.feelslike }}℃ </div>

        <div class="wind_speed "> <h5> Wind speed</h5> {{ weatherInfo.wind_speed }}km/h  </div>

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

  div.weather_box{
    height: 500px;
    background: rgba(150,181,229,255);
    border-radius: 50px;
  }

  .weather_image_now{
    border-radius: 100%;
  }

  div.weather_info{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  hr{
    margin: 0 3rem;
  }

  @media (min-width: 767px){
    div.weather_info{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .border_right{
      border-right: 1px solid gray;
    }

    div.weather_box{
    height: 500px;
    }
  }




</style>
