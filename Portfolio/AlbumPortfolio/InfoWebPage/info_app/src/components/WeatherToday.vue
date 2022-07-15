<template>
  <div class="weather_box">
    <div class="weather_location"> 
        <!-- <h3> {{objWeather.location.name}} {{objWeather.location.region}} {{objWeather.location.country}}   </h3> -->

    </div>

<!--  -->

    <div class="weather_time">

    </div>

<!--  -->

    <div class="weather_data">

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
      }
    },

    async mounted(){
        let weatherData = await fetch(weatherURL);
            weatherData = await weatherData.json();
        
        console.log(`weatherData`,typeof weatherData, weatherData);


        this.objWeather = weatherData;
        
        console.log(`objWeather`,typeof this.objWeather , this.objWeather);

        console.log(`this.objWeather.location.name`, typeof this.objWeather.location.name, this.objWeather.location.name);
        console.log(`this.objWeather.location.region`,typeof this.objWeather.location.region, this.objWeather.location.region);
        console.log(`this.objWeather.location.country`, typeof this.objWeather.location.country, this.objWeather.location.country);

    },
  }
</script>

<!--  -->

<style scoped>

  div.weather_box{
    height: 500px;
    background: rgb(100, 130, 170);
  }





</style>
