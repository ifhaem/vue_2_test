import Vue from 'vue'
import VueRouter from 'vue-router'
import PostPage from "../pages/PostPage";
import PostIdPage from "../pages/PostIdPage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageWithPosts',
    component: PostPage
  },
  {
    path: '/:id',
    component: PostIdPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
