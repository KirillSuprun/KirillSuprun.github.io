<template>
  <div class="">
    <p class="text-center news_news"> NEWS </p>

    <div class="news_theme text-center" v-for="item in this.arrNews" :id="'news' + item.elementNumber" :key="item.elementNumber" > 
        

        <h3 class="px-4 news_title"> {{item.title}} </h3>

        <div class="news_body"> 
            <div class="news_space">

                <div class="news_text d-flex justify-content-center align-items-center ps-5 pe-5 h-100 w-100">
                    
                    <p class="text_description"> {{item.description}}  </p>
                    
                </div>
            </div>

            <div class="news_space">
                <div class="news_image">
                    <span class=""></span>

                    <img class="news_photo" :src='item.image'  
                        alt=""
                    >

                </div>
            </div>
        </div>
        <p class="fw-bold"> Writer: {{item.author}}  </p>
        <a class="news_watch_link mb-3" :href="item.url"> <h5> Read more </h5> </a>
        <hr class="News_hr">
    </div>
  </div>
</template>

<script>
import { newsURL } from '@/links'

export default {
  name: 'NewsBlock',
  props: {
    
  },

  data(){
    return{
        arrNews: [],
    }
  },

  async mounted(){ 

    let newsStart = await fetch(newsURL);
        newsStart = await newsStart.json(); 


    console.log(`newsStart`, newsStart)

    newsStart = newsStart.data
    
    let i = 0;

    newsStart = newsStart.map(item => ({
        author: item.author,
        description: item.description,
        image: item.image,
        title: item.title,
        url: item.url,
        elementNumber: i++,
        category: item.category
    }));

    this.arrNews = newsStart;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .news_photo{
        width: 15rem;
    }

    .news_body{
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem;
        text-align: center;
        width: 100%;
    }

    .news_theme{
        width: 100%;
        margin-top: 2rem;
    }

    .news_space{
        padding: 1rem;
    }

    .news_watch_link{
        color: rgb(145, 104, 226);
        text-decoration: none;
    }

    .news_watch_link:hover{
        text-decoration: underline;
        color: rgb(57, 7, 156);
    }

    .news_title{
        color: rgb(0, 112, 163);
        text-shadow: 1px 1px 1px black;
    }

    .news_news{
        font-weight: 600;
        font-size: 3rem;
    }

    .text_description{
        max-width: 100%;
        word-wrap: break-word;
    }

    #news24   hr.News_hr{
        display: none;
    }

    hr.News_hr{
        margin-top: 2rem !important;
    }
   
    /* Media */
    @media (min-width: 767px){

        .news_title{
        color: rgb(0, 112, 163);
        text-shadow: 1px 1px 1px black;
        font-size: 2rem;
        }

    }

</style>
