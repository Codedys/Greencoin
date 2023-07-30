import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Blogs from '../views/Blogs.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: Home
   },
   {
    path: '/',
    name: 'projects',
    component: Projects
 },
 {
    path: '/',
    name: 'about',
    component: About
 },
 {
    path: '/',
    name: 'blog',
    component: Blogs
 },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
}) 
export default router