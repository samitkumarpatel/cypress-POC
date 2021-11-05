const Home = { template: '<h3>Welcome to the portal!</h3>'}
const Navbar = { template: '#navbar', props:['nav'] }

const Department = { 
  template: '#dept',
  data() {
    return {
      departments: [],
      department : {
        id: '',
        name: ''
      }
    }
  },
  methods: {
    info: function(id) {
      console.log(store.getters.departmentById(id))
    },
    edit: function(id) {
      this.department = store.getters.departmentById(id)
    },
    save: function() {
      store.commit('newDepartment',this.department)
    },
    update: function(id) {
      this.$store.commit('updateDepartment',id, this.department)
    },
    del: function(id) {
      this.$store.commit('deleteDepartment',id)
    },
    search: function(e) {
      console.log(e.data)
    }
  },
  created() {
    this.departments = store.commit('allDepartment')
  } 
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

const store = new Vuex.Store({
  state: {
    departments: []
  },
  mutations: {
    allDepartment (state) {
      state.departments = [
        { id: 1, name: "IT"},
        { id: 2, name: "HR"}
      ]
    },
    newDepartment (state, department) {
      state.departments.push(department)
    },
    updateDepartment (state, id, department) {
      state.departments
              .filter( d => d.id===id)
              .map( d => {
                d.name = department.name
                state.departments.splash(id,1,d)
              })
    },
    deleteDepartment (state, id) {
      
    }
  },
  getters: {
    departmentById: (state) => (id) => {
      return state.departments.find(d => d.id === id )
    }
  }
})

new Vue({
    el: '#app',
    router,
    store: store,
    components: {
        'Navbar' : Navbar,
        'Home' : Home
    },
    data: {

    }
})