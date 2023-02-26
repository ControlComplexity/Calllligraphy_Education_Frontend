<template>
   <TopBackground :page='page'></TopBackground>
<UniversitySwiper></UniversitySwiper>
</template>

<script>
/**
 *  大学书法教育
 */
 import TopBackground from '@/components/TopBackground/index.vue'
 import UniversitySwiper from '@/components/UniversitySwiper/index.vue'

   export default {
    data(){
     return{
      page: "university_education"
     }
    },
    components:{
      UniversitySwiper,
      TopBackground
    },
  name: 'UniversityEducation',
  props: {
    msg: String
  }
}
</script>