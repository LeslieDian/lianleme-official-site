import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Privacy from './pages/Privacy.vue'
import Agreement from './pages/Agreement.vue'
import './styles/main.scss'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'TrainYet 练了么 - AI 正在重新定义健身'
      }
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy,
      meta: {
        title: '隐私政策 - TrainYet 练了么'
      }
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement,
      meta: {
        title: '用户协议 - TrainYet 练了么'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'TrainYet 练了么'
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
