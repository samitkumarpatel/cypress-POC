const Home = { template: '<h3>Welcome to the portal!</h3>'}
const Navbar = { template: '#navbar', props:['nav'] }
Vue.component('Crud', { template: '#crud', props:['name', 'data']})
const Department = { 
  template: '#dept' 
}

const Employee = { 
  template: '#emp'
}

const routes = [
  { path: '/', component: Home },
  { path: '/department', component: Department },
  { path: '/employee', component: Employee }
]

const router = new VueRouter({
  routes  
})

new Vue({
    el: '#app',
    router,
    components: {
        'Navbar' : Navbar
    },
    data: {
      nav : [
        { name: 'department', url: '/department'},
        { name: 'employee', url: '/employee'}
      ],
      message: 'Employe Management! '
    }
})