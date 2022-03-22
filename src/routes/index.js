import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
  // Hash
  // https://google.com/#/search
  history : createWebHashHistory(),
  //pages 구분
  // https://google.com/about
  routes : [
    {
      path : '/',
      component : Home
    },
    {
      path : "/about",
      component : About
    },
    {
      path : "/movie",
      component : Movie
    }
  ]
})