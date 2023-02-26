<template>
  <div>
  <div class="swiper_block">
    <swiper :spaceBetween="30" :effect="'fade'" :navigation="true" :pagination="{
      clickable: true,
    }" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(item, index) in list" :key="index">
        <div class="top_link"
          v-bind:style="{ 'background-image': 'url(' + item.URL + ')', 'background-repeat': 'no-repeat', 'background-size': 'cover' }">
        </div>
        <!-- <img :src="item.URL"  /> -->
      </swiper-slide>
    </swiper>
    <SearchEngine class="search_engine"></SearchEngine>
  </div>
  <div class="liner_bottom"></div>
 </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper';
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SearchEngine from '@/components/SearchEngine/index.vue'
import axios from 'axios'
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    SearchEngine,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    let that = this
    axios.get("/interface/api/carousel/carousels")
      .then(function (response) {
        if (response.status == 200) {
          console.log(response.data.data.results)
          let res = [];
          that.list = response.data.data.results
          for (var item of response.data.data.results) {
            res.push(item)
          }
          that.list = res
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  setup() {
    const search = () => {
      let that = this
      console.log(that.keyword)
      axios.get("/interface/api/theory/theory?title=" + that.keyword).
        then(function (response) {
          if (response.status == 200) {
            console.log(response.data.data.results)
            let res = [];
            for (var item of response.data.data.results) {
              res.push(item)
            }
            that.list = res
            that.total = response.data.data.page.total
            console.log("that.total: ", that.total)
            that.dialog_visible = true;
          }
        }).catch(function (error) {
          console.log(error);
        });
    }
    return {
      search,
      modules: [EffectFade, Navigation, Pagination, Autoplay],
    };
  },
}
</script>
<style scoped>
#app {
  height: 100%
}

html,
body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
}

.swiper_block{
  position: relative;
}

.swiper {
  width: 100%;
  height: auto;
}
.shadow_block{
  height: 10px;
box-shadow: 10px -10px 10px  #000;
z-index: 1000;
position: relative;
}

.big_logo {
  float: left;
  width: 25%;
  height: auto;
  margin-left: 5%;
}
.liner_bottom{
  width: 100%;
  height: 10%;
  z-index: 100;
  background:linear-gradient(to top,black,rgba(255,0,0,0));
  position:absolute;
  bottom:0;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
  height: 700px;
}

.nav_main {
  margin-left: 10%;
  width: 100%;
  font-family: 微软雅黑;
  font-size: 21px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.mySwiper {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 22px;
}

.search_engine {
  z-index: 99999;
  position: absolute;
  bottom: -22px;
}
</style>