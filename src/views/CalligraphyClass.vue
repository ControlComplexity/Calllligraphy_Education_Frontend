<template>
  <div class="_block">
    <TopBackground :page="page"></TopBackground>
    <div class="classes_block">
      <div class="classes" v-for="(classes,i) in classesList" :key="i">
        <div class="image" :style="{backgroundImage:`url(${classes.src})`}" @click="calligraphyClasses(classes.en)">
          <div class="desc_block">
            <div class="desc">
              <span>{{classes.desc}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *  交流与学习
 */
 import TopBackground from '@/components/TopBackground/index.vue'
  export default {
    components:{
      TopBackground
    },
    props: {
      msg: String
    },
    methods:{
      calligraphyClasses(category) {
       console.log(category)
       this.$router.push({
        name: 'classes/' + category,
      })
    },
    },
    data(){
      return {
        page:'communicate',
        classesList:[
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片',
            desc:'硬笔楷书',
            en: "hard_regular",
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片',
            desc:'硬笔行书',
            en: "hard_running",
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel3.jpg',
            label:'图片2',
            desc:'欧楷',
            en: "ouyangxun_regular",
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel2.jpg',
            label:'图片2',
            desc:'颜楷',
            en: "yanzhenqing_regular",
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel6.jpg',
            label:'图片2',
            desc:'毛笔行书',
            en: "soft_running",
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel6.jpg',
            label:'图片2',
            desc:'隶书',
            en: "soft_official",
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel2.jpg',
            label:'图片2',
            desc:'篆书',
            en: "soft_seal",
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel5.jpg',
            label:'图片2',
            desc:'草书',
            en: "soft_cursive",
            link:''
          },
          {
            type:'img',
            src:'http://101.43.39.188/image/calligraphy/carousel/carousel4.jpg',
            label:'图片2',
            desc:'篆刻',
            en: "seal_cutting",
            link:''
          }
        ]
      }
    }
  }
</script>
<style scoped>
  ._block{
    width:100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .classes_block{
    margin: 10px;
    width: 90vw;
    height: 600px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: cloumn;
    align-items: center;
  }
  .classes{
    position: relative;
    width: 30%;
    height: calc(50% - 20px);
    margin: 5px;
  }
  .image{
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    transition: background-size ease-in .5s;
  }
  .classes:hover .image{
    background-size: 120%;
  }
  .desc_block{
    margin-top: -30px;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
  .desc{
    margin: 0 0 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: aliceblue;
    font-size: large;
  }
</style>