<template>
   <div class="home5">
 <HomeSwiper></HomeSwiper>

<div class="news_block">
 <div class="news_title_block"> <div class = "title">书法教育 · 要闻</div>
  <div class="news_link" style="margin-left: 20px; color: #ADADAD;"><a href="/news">更多</a></div>
</div>
  <div class="content clearfix">
    <div class="list">
          <div class="ptbox">
            <div class="inner">
            <div class="pic"> 
              <img :src="essay[0]?essay[0].Image:''" alt="">
            </div>
            <div class="text">
            <a target="_blank" :href="essay[0]?essay[0].URL:''">
                  <div style="font-size: 18px;">{{essay[0]?essay[0].Title:''}}</div>
                </a>
            </div>
          </div></div> 
        <div class="box">
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">{{essay[1]?essay[1].Title:''}}</div>
              </div>
          </a>
          </div>
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">{{essay[2]?essay[2].Title:''}}</div>
              </div>
          </a>
          </div>
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">{{essay[3]?essay[3].Title:''}}</div>
              </div>
          </a>
          </div>
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">{{essay[4]?essay[4].Title:''}}</div>
              </div>
          </a>
          </div>
        </div>
        </div>

         
    <div class="list">

      <div class="box">
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">{{essay[5]?essay[5].Title:''}}</div>
              </div>
          </a>
          </div>
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">{{essay[6]?essay[6].Title:''}}</div>
              </div>
          </a>
          </div>
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">{{essay[7]?essay[7].Title:''}}</div>
              </div>
          </a>
          </div>
          <div class="item">
            <a target="_blank" href="https://news.pku.edu.cn/xwzh/fabef6fd1e9b4f82b8026ea061160485.htm">
              <div class="text">
                <div class="h">{{essay[8]?essay[8].Title:''}}</div>
              </div>
          </a>
          </div>
        </div>
        
          <div class="ptbox">
            <div class="inner">
            <div class="pic"> 
              <div class="img" style="background-image:url(https://news.pku.edu.cn/esdzt/images/2022-12/ed9ad90437674658ad25941be829ade1.jpeg);">
              </div>
            </div>
            <div class="text">
            <a target="_blank" href="https://news.pku.edu.cn/esdzt/">
                  <div style="font-size: 18px;">{{essay[9]?essay[9].Title:''}}</div>
                </a>
            </div>
          </div></div> 
       
        </div>

</div>
</div>
 <SearchResult  v-show="dialog_visible" 
      :dialog_visible="dialog_visible">
    </SearchResult>
 <Hyperlink></Hyperlink>     
 <Footer></Footer>   
</div>
</template>

<script>
import Hyperlink from '@/components/Hyperlink.vue'
import TopHyperlink from '@/components/TopHyperlink.vue'
import Footer from '@/components/Footer.vue'
import HomeSwiper from '@/components/HomeSwiper/index.vue'
import SearchResult from '@/components/SearchResult/index.vue'
import axios from 'axios'
export default {
  components: {
    Hyperlink,
    Footer,
    TopHyperlink,
    HomeSwiper,
   
    SearchResult
  },
  name: 'HomeView',
  methods:{

},
created(){
  let that = this
         axios.get("/interface/api/news/news?limit=10&page=1")
        .then(function (response) {
          if (response.status == 200){
            that.essay = response.data.data.results
          }
          console.log("that.essay: ",   that.essay)
        })
        .catch(function (error) {
          console.log(error);
        });
},
data() {
    return {
      // 控制子组件显示与隐藏的标识，类型为Boolean
      dialog_visible: false,
      keyword: "",
      essay: [],
    }
  },
  }
</script>

<style>
.news_block{
  margin-top: 3%;
  margin-bottom: 3%;

}
.list{
  display: flex;
  justify-content: space-between;
}
.list .ptbox {
    width: calc(50% - 10px);
    position: relative;
}
.content {
    margin-top: 45px;
}
.ptbox .inner {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
}
.ptbox .text {
    position: absolute;
    left: 0;
    bottom: -1px;
    right: 0;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.9));
    color: #fff;
}
.ptbox .img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.3s ease-out 0s;
}
.news_title_block{
  margin-left: 15%;
  align-items: center;
  display: flex;
}

 .text .h {
    font-size: 16px;
    line-height: 1.5;
}
.ptbox .pic {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
a{
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  }

  .list .box {
    width: calc(50% - 10px);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.list .item{
    background-size: contain;
    position: absolute;
  
    background: #fff;
    box-shadow: 0 0 10px rgb(0 0 0 / 10%);
    width: calc(50% - 10px);
    cursor: pointer;
    position: relative;
    border-bottom: 4px solid #94070a;
}
.home5 .list .item .text {
    padding: 40px 30px;
    position: relative;
}
.home5 .list .item:nth-child(1):before {
    content: "";
    background: url(../assets/svg/bg9a.svg) right bottom no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.item:nth-child(2):before {
    content: "";
    background: url(../assets/svg/bg9a.svg) right bottom no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.item:nth-child(3):before {
    content: "";
    background: url(../assets/svg/bg9a.svg) right bottom no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.item:nth-child(4):before {
    content: "";
    background: url(../assets/svg/bg9a.svg) right bottom no-repeat;
    background-size: contain;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}


.home5 {
    background: #efebea;
}

.title{
  font-family: 微软雅黑;
  font-size: 30px;
}
.news_link :hover{
  color: #94070a;
}
</style>