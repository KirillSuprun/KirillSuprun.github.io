<template>
  <div class="weather_box mt-4 mb-4">
    <div class="weather_location text-center p-2"> 
        <h5> {{location_name}} {{location_region}} {{location_country}}   </h5>

    </div>

<!--  -->

    <div class="weather_time text-center">
        <h5> {{timeNow}}  </h5>
        <h5> {{dateNow}}  </h5>
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
         location_name: '',
         location_region: '',
         location_country: '',
         dateNow: '',
         timeNow: '',
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
        
        function refreshTime (){
          let timeRightNow = ''
          let today = new Date();
          let todayHours = today.getHours();
          let todayMinutes = today.getMinutes()
          let todaySecond = today.getSeconds()

          console.log(todayHours, todayMinutes, todaySecond)

          timeRightNow = todayHours + ':' + (todayMinutes >= 10 ? todayMinutes : '0' + todayMinutes) + ':' + (todaySecond >= 10 ? todaySecond : '0' + todaySecond) ;
          return timeRightNow
        }

        setInterval(function () {
          refreshTime();
        }, 1000);
        
        this.timeNow = refreshTime()
    },

    computed: {

    },

    methods: {
      refreshTime() {
        
      }
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
