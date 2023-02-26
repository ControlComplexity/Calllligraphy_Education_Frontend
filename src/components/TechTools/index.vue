<template>
    <div id="main"    style="width: 100%;height: 280px;">
      <swiper
      :slidesPerView="3"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
        :grid="{
          rows: 2,
        }"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        class="swiper"
        :modules="modules"
        >
            <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 3</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 4</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 5</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 6</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 7</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 8</swiper-slide>
            <swiper-slide class="swiper-slide">Slide 9</swiper-slide>
    </swiper>
    </div>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/grid';
    import 'swiper/css/pagination';
  
  
    // import required modules
    import { Grid, Pagination} from 'swiper';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Grid, Pagination],
        };
      },
    };
  </script>

<style scoped lang="less">
#main{
  position: relative;
  height: 100%;
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
 .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  
   .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      height: calc((100% - 30px) / 2) !important;

      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
   }
 }
}




</style>  