import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home
   },
   {
    path: '/projects',
    name: 'Projects',
    component: Projects
 },
 {
    path: '/about',
    name: 'About',
    component: About
 },
 {
    path: '/blog',
    name: 'Blog',
    component: Blog
 } 
]

const router = createRouter({
   history: createWebHashHistory(process.env.Base_URL),
   routes
}) 
export default router