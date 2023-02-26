<template>
    <div class="root">
        <img class="image" v-show="currentImage" :style="{backgroundImage:`url(${currentImage?.src})`}">
        <div class="liner_bottom"></div>
    </div>
</template>
   
<script>
    import { computed,getCurrentInstance,reactive,onBeforeUpdate,onUpdated,toRefs,watch} from 'vue'
    import { useRoute,useRouter,onBeforeRouteUpdate } from 'vue-router'
    
    export default {
        props:{
            page:{
                type:String,
                default(){
                    return 'none'
                }
            }
        },
        setup() {
            const { proxy } = getCurrentInstance()
            const router = useRouter()
            const route = useRoute()
            const state = reactive({
                imageList:[
                    {
                        page:'children_education',
                        src: '/src/assets/children/children_top.jpeg'
                    },
                    {
                        page:'university_education',
                        src:'/src/assets/university/university_top.jpg'
                    },
                    {
                        page:'technology',
                        src:'@asset/technology/technology_top.jpeg'
                    },
                    {
                        page:'theory',
                        src:'@asset/theory/theory_top.jpg'
                    },
                    {
                        page:'communicate',
                        src:'@asset/communicate/tianyingzhang_regular_top.png'
                    }
                ],
                currentImage:{}
            })
            watch(()=> proxy.page,(nval,oval)=>{
                console.log(nval,'值发生变化')
                state.imageList.forEach(v => {
                    if(v.page == proxy.page) state.currentImage = v
                })
            },{
                immediate:true, //立即執行
                deep:true //深度監聽
            })
            
            return {
            ...toRefs(state),
            }
        }
    }
</script>

<style scoped>
    .root{
        width: 100vw;
        height: 500px;
        position: relative;
    }
    .image{
        width: 100vw;
        height: 500px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        box-shadow:  inset    0px 10px 10px rgb(7, 7, 7);
    }
    .liner_bottom{
        width:100%;
        height: 10%;
        background:linear-gradient(to top,black,rgba(255,0,0,0));
        position:absolute;
        bottom:0;
        
    }
</style>