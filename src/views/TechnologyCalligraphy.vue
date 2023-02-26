<template>
  <div >
    <TopBackground :page='page'></TopBackground>
    <div class="robots_block">
      <div class="text">写字机器人</div>
      <div style="width:100%; height:280px;">
        <swiper
         :loop="true" 
         :autoplay="{
          delay: 500,
          disableOnInteraction: false,
        }" 
        :slidesPerView="4" :spaceBetween="20" :pagination="{clickable: true}" :mousewheel="true" 
          class="mySwiper" ref="mySwiper"
          :modules="modules">
          <swiper-slide v-for="(item, index) in list" :key="index">
            <div><img :src='item.Image'></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    </div>
    <div>
      <TechTools></TechTools>
  </div>
</template>

<script>
import { Pagination, Grid, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import TechTools from '@/components/TechTools/index.vue';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import axios from 'axios'
import TopBackground from '@/components/TopBackground/index.vue'
export default {
  components: {
    TopBackground,
    TechTools,
    Swiper,
    SwiperSlide,
    Grid,
  },
  data() {
    return {
      modules: [ Pagination, Autoplay, Grid],
      page: 'technology',
      list: [],
    };
  },
  created() {
    let that = this
    axios.get("/interface/api/tech/tech")
      .then(function (response) {
        if (response.status == 200) {
          console.log(response.data.data.results)
          let res = [];
          // that.list = response.data.data.results
          for (var item of response.data.data.results) {
            res.push(item)
          }
          that.list = res
          that.total = response.data.data.page.total
          console.log("that.total: ", that.total)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>



<style>
#app {
  height: 100%;
}

html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.text {
  font-size: 30px;
}

.swiper {
  width: 100%;
  height: 60%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.robots_block {
  margin-top: 1%;
}

</style>