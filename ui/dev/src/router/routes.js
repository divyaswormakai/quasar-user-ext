import pages from './pages'

const children = pages.map(page => ({
  path: page.path,
  name: page.file,
  component: () => import('./../pages/' + page.file + '.vue'),
  meta:{},
  beforeEnter:((to,form,next)=>{
    if(to.path.toString().includes('login')){
      to.meta.transitionName= "animate__animated animate__slideInRight"
    }
    if(to.path.toString().includes('register')){
      to.meta.transitionName= "animate__animated animate__slideInLeft"
    }
    next();
  })
}))

const routes = [
  {
    path: '/',
    component: () => import('./../layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('./../pages/Index.vue') }
    ].concat(children)
  }
]

export default routes
