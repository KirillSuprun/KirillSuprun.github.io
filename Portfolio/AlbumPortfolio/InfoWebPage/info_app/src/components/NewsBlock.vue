<template>
  <div>
    <h1 class="text-center"> NEWS </h1>

    <div class="news_body" :key="item.element" v-for="item in this.arrNews"
    
    >   <div class="news_space">
            <div class="news_text">
                <h4> {{item.title}} </h4>
                
                <p> {{item.description}}  </p>
                <p> {{item.author}}  </p>
                <p>  <a :href="item.url"> <h4> Watch more </h4> </a>   </p>
            </div>
        </div>

        <div class="news_space">
            <div class="news_image">
                <img class="news_photo" :src='item.image'  
                    alt=""
                    >

            </div>
        </div>
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

    console.log(`news`, typeof newsStart, newsStart);

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

    console.log(`arrNews`, this.arrNews);

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .news_photo{
        width: 15rem;
    }

    .news_image{
        min-width: 15rem;
    }

    .news_body{
        display: flex;
        flex-direction: column-reverse;
        padding: 1rem 1rem;
        text-align: center;
        width: 100%;
    }

    .news_space{
        padding: 1rem;
    }


    /* Media */
    @media (min-width: 767px){
        .news_image{
        min-width: 25%;
    }

    .news_text{
        min-width: 75%
    }

    .news_body{
        display: flex;
        flex-direction: row;
        padding: 1rem 1rem;
        width: 100%;
        }
    }

</style>
