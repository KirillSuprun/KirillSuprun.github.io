<template id="app">
  <div class="">  
    
    <header class="header">
      <div class="header_container">  

        <a href="" class="header_logo"> <img class="logo_logo" src="./assets/horizontal_on_white_by_logaster.png" alt=""> </a>

        <div class="header_menu menu" >
            <div class="menu_icon">  
                <span>  </span>
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

                  <li>
                    <a href="../../../../index_Portfolio_main.html" class="menu_link"> Main page </a>
                  </li>

                </ul>
            </nav>
        
        </div>

      </div>
      
    </header>
    
    <div class="full_screen">
      <div class="full_screen_body">
        <div class="full_screen_title animate__animated animate__zoomIn animate__slow"> News today </div>
        <div class="full_screen_text animate__animated animate__zoomIn animate__slow"> News, weather, exchange rates and share price of companies for today </div>
      </div>
        
       
         <video loop autoplay muted preload="auto" class="full_screen_video" width="">
           <source type="video/mp4" src="./assets/StarsVideo.mp4">
         </video>
    </div>

  
    <main class="container">  
      <div class="news_grid">
        <news-block class="newsBlock"  />
      </div>
      
      <div>  
         <weather-today class="" /> 

        <share-price class="bg-warning topHeader" />
      
        <exchange-rates class="bg-success" />

      </div>

    </main>
    <footer > <span class="html_characters"> &#169;&#160;</span>Coperight 2022 </footer> 
</div> 

</template>



<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/animate.css/animate.css';
import SharePrice from './components/SharePrice.vue';
import ExchangeRates from './components/ExchangeRates.vue';
import WeatherToday from './components/WeatherToday.vue';
import NewsBlock from './components/NewsBlock.vue';


export default {
  data() {
    return{
      title: 'app',
    }
  },
  components: {
    SharePrice, ExchangeRates, WeatherToday, NewsBlock,
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
  z-index: 7;
}

.header_container{
  max-width: 1300px;
  margin: 0px auto;
  display: flex;
  padding: 0px 30px;
  align-items: center;
  justify-content: space-between;
  min-height: 70px;
}

.header_logo{
  z-index: 5;
  height: 40px;
}

.logo_logo{
  max-height: 120%;
  border-radius: 20px;
  margin: -5px;
  position: relative;
  z-index: 5;
}

div.allTh{
  min-height: 100vh;
}

.menu_list > li {
  position: relative;
  margin: 10px 0px 0px 20px;
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
  font-weight: 500;
  text-decoration: none;
  transition: 0.5s;
  }

  a.menu_link:hover{
    color: #fff;
    text-decoration: underline;
    transition: 0.5s;
  }

  .menu_list{
    display: flex;
    align-items: center;
  }
  
  .full_screen{
    display: flex;
    position: relative;
    min-height: 100vh;
    flex-direction: column;
  }

  .full_screen_body{
    background-color: rgba(37, 37, 37, 0.425);
    position: relative;
    z-index: 2;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-self: center;

  }

  .full_screen_video{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .full_screen_title{
    font-family: 'Oxygen', sans-serif;
    font-size: 3.5rem;
    font-weight: 400;
    color: white;
    text-shadow: 0px 0px 7px rgb(255, 255, 255);;
    text-transform: uppercase;
  }

  .full_screen_text{
    font-family: 'Oxygen', sans-serif;
    font-size: 2rem;
    color: white;
    text-align: center;
    padding: 15px 10px;
  }
/*  Main css */



main{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 1rem
}

.news_grid{
  border-bottom: 1px solid rgb(199, 198, 198);
  margin-top: 2rem;
}



/* Main Theme */


/* NewsBlock */

footer{
  font-family: 'Oxygen', sans-serif;
  display: flex;
  top: 0;
  left: 0;
  background: rgb(21, 10, 43);
  width: 100%;
  color: rgb(255, 255, 255);
  text-align: center;
  font-weight: bolder;
  min-height: 50px;
  align-items: center;
  justify-content: center;
}

.html_characters{
  font-size: 1.5rem;

}

/* Footer */

/* Media request */
@media (min-width: 998px){
  .menu_list{
    display: flex;
    align-items: center;
  }

  .menu_list > li{
    padding: 10px 0px;
  }

  a.menu_link {
    color: rgb(201, 201, 201);
    transition: 0.5s;
  }

  a.menu_link:hover{
    color: #fff;
    text-decoration: underline;
    transition: 0.5s;
  }
  

  .full_screen_body{
    background-color: rgba(37, 37, 37, 0.425);
    position: relative;
    z-index: 2;
    display: flex;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15%;
    width: 100%;
  }

  .full_screen_title{
    font-size: 4.5rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.774);
    text-shadow: 0px 0px 7px rgb(255, 255, 255);
    text-transform: uppercase;
  }

  .full_screen_text{
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.815);
    text-align: center;
    padding-top: 15px;
  }

  main{
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr;
  gap: 1rem;
  }

  .news_grid{
  border-right: 1px solid rgb(199, 198, 198);
  }

}

</style>
