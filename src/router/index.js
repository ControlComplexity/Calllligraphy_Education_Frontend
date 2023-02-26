import { createRouter, createWebHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheoryDetail from '@/components/TheoryDetail.vue'
import Admin from '@/components/Admin/index.vue'
import Login from '@/components/Login/index.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:'书法教育'
    }
  },
 
  {
    path: '/copybook',
    name: 'copybook',
    component: () => import(/* webpackChunkName: "about" */ '../views/Copybook.vue')
  },
  {
    path: '/children',
    name: 'children',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChildrenEducation.vue')
  },
  {
    path: '/university',
    name: 'university',
    component: () => import(/* webpackChunkName: "about" */ '../views/UniversityEducation.vue')
  },
  {
    path: '/theory',
    name: 'theory',
    component: () => import(/* webpackChunkName: "about" */ '../views/EducationTheory.vue')
  },
  {
    path: '/tech',
    name: 'tech',
    component: () => import(/* webpackChunkName: "about" */ '../views/TechnologyCalligraphy.vue')
  },
  {
    path: '/communicate',
    name: 'communicate',
    component: () => import(/* webpackChunkName: "about" */ '../views/CalligraphyClass.vue')
  },
  {
    name: 'theoryDetail', // 命名路由
    path: '/theory_detail/:id', // 动态二级路由
    component: TheoryDetail
  },
  {
    name: 'admin', // 命名路由
    path: '/admin', // 动态二级路由
    component: Admin
  },
  {
    name: 'login', // 命名路由
    path: '/login', // 动态二级路由
    component: Login
  },
  {
    name: 'news', // 命名路由
    path: '/news', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue')
  },
  {
    name: 'classes/hard_regular', // 命名路由
    path: '/classes/hard_regular', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/HardRegular.vue')
  }
  ,
  {
    name: 'classes/hard_running', // 命名路由
    path: '/classes/hard_running', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/HardRunningScript.vue')
  }
  ,
  {
    name: 'classes/ouyangxun_regular', // 命名路由
    path: '/classes/ouyangxun_regular', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/OuyangxunRegular.vue')
  }
  ,
  {
    name: 'classes/yanzhenqing_regular', // 命名路由
    path: '/classes/yanzhenqing_regular', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/YanzhenqingRegular.vue')
  }
  ,
  {
    name: 'classes/soft_running', // 命名路由
    path: '/classes/soft_running', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/SoftRunningScript.vue')
  }
  ,
  {
    name: 'classes/soft_official', // 命名路由
    path: '/classes/soft_official', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/OfficialScript.vue')
  }
  ,
  {
    name: 'classes/soft_seal', // 命名路由
    path: '/classes/soft_seal', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/SealScript.vue')
  },
  {
    name: 'classes/soft_cursive', // 命名路由
    path: '/classes/soft_cursive', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/SoftCursive.vue')
  },
  {
    name: 'classes/seal_cutting', // 命名路由
    path: '/classes/seal_cutting', // 动态二级路由
    component: () => import(/* webpackChunkName: "about" */ '@/components/classes/SealCutting.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
