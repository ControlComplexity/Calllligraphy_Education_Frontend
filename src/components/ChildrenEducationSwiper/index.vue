<template>
  <div class="root">
    <div class="points">

      <div class="more_points">
        <h2>教育看点</h2>
        <div class="more"> | &nbsp; &nbsp;<a>更多</a> &nbsp;&nbsp;> </div>
      </div>
      <div class="act_block">
        <div class="arrow">
          <a href="" class="prev"></a>
          <a href="" class="next"></a>
        </div>
      </div>
    </div>
    <div style="width: 100%;height: 280px;">
      <swiper 
      :loop="true" 
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" 
      :slidesPerView="4" 
      :spaceBetween="20"
       :pagination="{
     clickable: true
       }" 
       :mousewheel="true" 
       :modules="modules" 
       class="mySwiper" ref="mySwiper">
        <swiper-slide v-for="(item, index) in list" :key="index">
          <div><img :src='item.URL'></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay,Pagination } from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules

import 'video.js/dist/video-js.css'
import axios from 'axios';
const MySwiper = {
  data() {
    return {
      list: [],
    }
  },
  name: "MySwiper",
  components: {
    Swiper,
    SwiperSlide,
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
    const otherPage = (direction) => {
      var mySwiper = document.querySelector('.swiper').swiper
      switch (direction) {
        case 'left':
          console.log('left')
          mySwiper.slidePrev()
          break
        case 'right':
          console.log('right')
          mySwiper.slideNext()
          break
        default:
          break
      }
    }
    return {
      modules: [Pagination, Autoplay],
      otherPage,
      // 视频播放器配置
    };
  },
};
export default MySwiper
</script>
<style>
.root {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.more_points {
  display: flex;
  flex-direction: row;
  align-content: center;
}

.points {
  height: 100px;
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.act_block {
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
}

.more {
  margin-left: 10px;
  display: flex;
  color: #ADADAD;
  align-items: center;
  font-size: 13;
}

.prev,
.next {
  font-size: 25px;
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ffffff00;
  border: .5px solid rgb(99, 17, 174);
  margin: 0 5px;
}

.prev:hover,
.next:hover {
  cursor: pointer;
}

.swiper-pagination {
  visibility: hidden;
}

.swiper-slide {
  height: 100;
}

.arrowL {
  width: 100px;
  height: 100px;
  border: 2px solid purple;
  border-radius: 50%;
  transition: all .38s ease;
  opacity: .3;
}

.arrowL:hover {
  /* border: 3px solid purple; */
  opacity: 1;
}

.arrowL .line {
  width: 80%;
  border: 1px solid purple;
  position: relative;
  top: 50%;
  left: 50%;
}

.arrowL .line2 {
  width: 31%;
  border: 1px solid purple;
  position: relative;
  top: 34.7%;
  transform: rotate(120deg);
  left: 42%;
}




.arrowR {
  width: 100px;
  height: 100px;
  border: 1px solid purple;
  border-radius: 50%;
  transition: all;
  opacity: .3;
}

.arrowR:hover {
  /* border: 3px solid purple; */
  opacity: 1;
}

.arrowR .line {
  width: 80%;
  border: 1px solid purple;
  position: relative;
  top: 50%;
  left: -30%;
}

.arrowR .line2 {
  width: 31%;
  border: 1px solid purple;
  position: relative;
  top: 36.7%;
  transform: rotate(45deg);
  left: 24%;
}

.arrow {
  display: flex;
  transition: all .5s ease;
  background: center no-repeat;

}

.arrow a.prev {
  background-image: url('./images/prev53.png');
  width: 2rem;
  height: 2rem;
  background-size: 100%;
  border: 1px solid purple;
  border-radius: 50%;
  opacity: .3;
  transition: all 1s ease;
}

.arrow a.prev:hover {
  opacity: 1;
}

.arrow a.next {
  margin-left: 5%;
  background-image: url('./images/next53.png');
  width: 2rem;
  height: 2rem;
  background-size: 100%;
  border: 1px solid purple;
  border-radius: 50%;
  opacity: .3;
  transition: all 1s ease;
}

.arrow a.next:hover {
  opacity: 1;
}
</style>