import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/view/home/index')
const page1 = () => import('@/view/page1/index')
const page2 = () => import('@/view/page2/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect:'/page1',
      children:[
        {
          path:'/page1',
          name: 'page1',
          component: page1,
        },
        {
          path:'/page2',
          name: 'page2',
          component: page2,
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
