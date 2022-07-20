<template>
  <div class="weather_box mt-4 mb-4">
    <div class="weather_location text-center p-2"> 
        <h5> {{location_name}} {{location_region}} {{location_country}}   </h5>

    </div>

<!--  -->

    <div class="weather_time text-center">
        <h5> {{hours}}:{{minutes}}:{{seconds}} </h5>
        <h5> {{dateNow}}  </h5>
    </div>

<!--  -->

    <div class="weather_data">

    </div>
  </div>
</template>

<!--  -->

<script>
  // import {weatherURL} from '@/links'


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
         seconds: 0
      }
    },

    async mounted(){
        // let weatherData = await fetch(weatherURL);
        //     weatherData = await weatherData.json();
        
        // console.log(`weatherData`,typeof weatherData, weatherData);


        // this.objWeather = weatherData;
        
        // console.log(`objWeather`,typeof this.objWeather , this.objWeather);

        // this.location_name = this.objWeather.location.name;
        // this.location_region = this.objWeather.location.region;
        // this.location_country = this.objWeather.location.country;
//  date
        let date = new Date().toDateString();
        
        this.dateNow = date;
        console.log(`this.dateNow`, this.dateNow);
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
