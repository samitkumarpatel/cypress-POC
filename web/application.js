const API_URI = "http://localhost:3000"
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
    ...Vuex.mapActions(["addDepartment", "fetchDepartments", "updateDepartment", "deleteDepartment  "]),
    info: function(id) {
      console.log(store.getters.departmentById(id))
    },
    edit: function(id) {
      this.department = store.getters.departmentById(id)
    },
    save: function() {
      this.addDepartment(this.department)
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
  computed: Vuex.mapGetters(["departmentList"]),
  created() {
    this.fetchDepartments()
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
    departments: [
      { id: 1, name: "IT"},
      { id: 2, name: "HR"}
    ]
  },
  getters: {
    departmentList: state => state.departments
  },
  actions: {
    fetchDepartments({commit}) {
      axios.get(API_URI+"/department")
        .then( response => {
          commit("setDepartments", response.data)
        })
        .catch( error => {

        })
    },
    addDepartment({commit}, department) {
      axios.post(API_URI+"/department", department)
        .then( response => {
          commit("addNewDepartment", response.data)
        })
        .catch( error => {

        })
    },
    updateDepartment({commit}, id, department) {
      axios.put(API_URI+"/department/"+id, department)
        .then( response => {
          commit("editDepartment", response.data)
        })
        .catch( error => {

        })
    },
    deleteDepartment({commit}, id) {
      axios.delete(API_URI+"/department/"+id)
        .then( response => {
          commit("removeDepartment", id)
        })
        .catch( error => {

        })
    }
  },
  mutations: {
    setDepartments: (state, departments) => {
      state.departments = departments
    },
    addNewDepartment:(state, department) => state.departments.unshift(department),
    editDepartment: (state, department) => {
      //array replacement logic      
      console.log(department)
    },
    removeDepartment: (state, id) => (
      state.departments.filter(dept => dept.id !== id),
      state.departments.splice(dept => dept.id, 1)
    )
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