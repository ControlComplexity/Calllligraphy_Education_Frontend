import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

router.beforeEach((to,from,next)=>{
 if(to.meta.title){
  document.title = to.meta.title
 }
 next()
})

const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(router)
 .use(ElementPlus,{
  locale: zhCn,
 }).mount('#app')
 


if (process.env.NODE_ENV == 'development') {
 app.config.devtools = true;
} else {
 app.config.devtools = false;
}