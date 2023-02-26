<template>
<div>
<div id="content">           
 <h2>{{essay.Title}}</h2>
</div>
<div id="content">           
 {{essay.Content}}
</div>
<div id="content">           
 {{essay.Hits}}
</div>
<div id="content">           
 {{essay.Like}}
</div>
</div>
 </template>
 <style scoped>
 .contentContainer{
  display:flex;
  justify-content:center;
  align-items:center;
 }
 #content {
  width: 85%;
 }
</style>

<script lang="js">
// 文章详情
import axios from 'axios'
export default {
  name: 'Detail',
  data(){
    return {
      essay: this.essay
    }
  },
  created(){
    console.log('mounted', this.$route.params.id)
    console.log('created', this.$route)
      let that = this
         axios.get("/interface/api/theory/" + this.$route.params.id)
        .then(function (response) {
          if (response.status == 200){
            that.essay = response.data.data.results
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },
}
</script>