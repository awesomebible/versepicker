import Home from './views/Home.vue'
import Year from './views/Year.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/:year', component: Year, meta: { title: 'Yeae' }},
  { path: '/:path(.*)', component: NotFound },
]
