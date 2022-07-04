<template>
<div class="container">  
  
  <header class="header">
    <div class="header_container">  

      <a href="" class="header_logo">      </a>

      <div class="header_meenu menu" >
          <div class="menu_icon">  
              <span> Menu Icon here </span>
          </div>

          <nav class="menu_body">    
              <ul class="menu_list">
                <li>
                  <a href="" class="menu_link"> Weather </a>
                </li>

                <li>
                  <a href="" class="menu_link"> New's today </a>
                </li>

                <li>
                  <a href="" class="menu_link"> Exchange Rates </a>
                </li>

                <li>
                  <a href="" class="menu_link"> Company shares </a>
                </li>


              </ul>
          </nav>
      
      </div>

    </div>
  </header>


   <top-header class="bg-warning" />
   


  <exchange-rates class="bg-success" />
  <weather-today class="bg-info" />

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
  },


}




</script>

<style>
#app {
    background-image: linear-gradient(to right, #f5f5dc, #eff8e3, #ebfbeb, #eafdf2, #ebfef9, #ebfef9, #ebfef9, #ebfef9, #eafdf2, #ebfbeb, #eff8e3, #f5f5dc);
}

header{
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(21, 10, 43);
  width: 100%;
  color: rgb(201, 201, 201);
}

.header_container{
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  padding: 0px 30px;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
}

.header_logo{
  border-radius: 50%;
  background: white;
  position: relative;
  z-index: 5;
  width: 40px;
  height: 40px;
}

div.container{
  min-height: 100vh;
}

.menu_list > li {
  position: relative;
  margin: 0px 0px 0px 20px;
}

ul.menu_list{
  list-style-type: none;
}

a.menu_link {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
}

  a.menu_link {
  color: #fff;
  /* font-size: 18px; */
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
  }

  a.menu_link:hover{
    color: #fff;
    text-decoration: underline;
    transition: 0.3s;
  }

@media (min-width: 767px){
  .menu_list{
    display: flex;
    align-items: center;
  }

  .menu_list > li{
    padding: 10px 0px;
  }

  a.menu_link {
  color: rgb(201, 201, 201);
  }

}

</style>
