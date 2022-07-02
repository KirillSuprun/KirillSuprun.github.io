<template>
<div class="container text-center bg-info">  
  <top-header class="bg-warning" />
   
  <h1> Fasf</h1>

  <exchange-rates class="bg-success" />

  <weather-today/>

  <footer> </footer>
</div> 

</template>



<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TopHeader from './components/TopHeader.vue';
import ExchangeRates from './components/ExchangeRates.vue';
import WeatherToday from './components/WeatherToday.vue';


export default {
  data() {
    return{
      title: 'app',
    }
  },
  components: {
    TopHeader, ExchangeRates, WeatherToday, 
  }
}
</script>

<style>
#app {
    background: white;
}
div.container{
    min-height: 100vh;

}

</style>
