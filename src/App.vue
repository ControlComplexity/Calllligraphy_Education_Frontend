<template>
  <!-- <div class="nav_block"> -->
    <!-- <router-link to="/">主页</router-link> &nbsp|&nbsp
    <router-link to="/copybook">书法字帖</router-link>&nbsp|&nbsp
    <router-link to="/children">少儿书法教育</router-link>&nbsp|&nbsp
    <router-link to="/university">大学书法教育</router-link>&nbsp|&nbsp
    <router-link to="/theory">书法教育理论</router-link>&nbsp|&nbsp
    <router-link to="/tech">科技与书法</router-link>&nbsp|&nbsp
    <router-link to="/communicate">学习与交流</router-link>&nbsp|&nbsp -->
    <!-- <router-link to="/about">关于</router-link> -->
   <!-- <div class="block">
    <div class="nav_left">
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
      <a class="link" href="https://www.yac8.com/">硬笔书法</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
    </div>
    <div class="nav_right">
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏right</a>
    </div>
    </div> -->
  <!-- </div> -->
  
  <div class="nav_block">
        <div class = "big_logo"><img src="./assets/biglogo.png"></div>
      <div class = "nav_all">
      <div class="nav_left">
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
      <a class="link" href="https://www.yac8.com/">硬笔书法</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
      <a class="link" href="https://www.yac8.com/">书法欣赏</a>
      </div>
      <div class="nav_main"> 
        <div class = "nav_main_link" ><a href="/">首页</a></div>
      <div class = "nav_main_link" ><a href="/children">少儿书法教育</a></div>
      <div class = "nav_main_link" ><a href="/university">大学书法教育</a></div>
      <div class = "nav_main_link" ><a href="/theory">书法教育理论</a></div>
      <div class = "nav_main_link"><a href="/tech">科技与书法</a></div>
      <div class = "nav_main_link" ><a href="/communicate">书法课堂 </a></div>
    </div>

      </div></div>
  <router-view/>
</template>

<style lang="less" >
body{
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0%;
}
// .nav_block {
//   line-height: 45px;
//     height: 45px;
//     font-size: 14px;
//    transition: all 0.2s ease-out 0s;
//     overflow: hidden;
//   background: #94070a;
//     color: #d39797;

// .block{
//   width: auto;
//   padding-left: 40px;
//   padding-right: 40px;
//   box-sizing: border-box;
//   position: relative;
//   height: 100%;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-pack: justify;
//   justify-content: space-between;
//   -ms-flex-align: center;
//   align-items: center;
// }
// .link{
//   margin-left: 30px;
//   cursor: pointer;
// }

.link{
  color: #fff;
   margin-left: 20px;
   font-size: 0.18rem;
   cursor: pointer;
  font: "SourceSansPro-Regular";
 }
.top_link{
  width: 100%;
  height: 800px;
}
.nav_left{
  height: 40px;
  color: #fff;
}
.nav_main_link{
  float: left;
  margin-left: 4%;
  color: #fff;
}
.nav_all{
  width: 70%;
}
.nav_block{
  position: absolute;
  z-index: 9999;
  width:100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(assets/head-bg.png) center repeat-x;
    background-size: 100% 100%;
}
</style>


