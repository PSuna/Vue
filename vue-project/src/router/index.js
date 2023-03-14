import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import compu from '../components/ComputedExam.vue'
import DataBinding from '../components/DataBindingList.vue'
import EventClick from '../components/EventClick.vue'
import jinju from '../components/JinjuExam.vue'
import gimhae from '../components/GimhaeExam.vue'
import air from '../components/AirExam.vue'

const routes = [
  {
    path : '/air',
    name : 'air',
    component : air
  },
  {
    path :'/gimhae',
    name : 'gimhae',
    component : gimhae
  },
  {
    path : '/jinju',
    name : 'jinju',
    component : jinju
  },
  {
    path : '/EventClick',
    name : 'EventClick',
    component : EventClick
  },
  {
    path : '/DataBinding',
    name : 'DataBinding',
    component : DataBinding
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/computedExam',
    name : 'computedExam',
    component : compu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
