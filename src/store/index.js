import {
  createStore
} from "vuex";
const store = createStore({
  state: {
    user: null,
    repository :null,
    userUrl :"https://api.github.com/users/",
    info: ""
  },
  mutations: {
    getUser(state,payload){
      state.user = payload
    },
    getRepos(state,payload){
      state.repository = payload
    }
  },
  actions: {
    async getUser({commit,state},search) {
      try {
        const user = await fetch(`${state.userUrl}${search}`)
        const repos = await fetch(`${state.userUrl}${search}/repos`)
        const allUser = await user.json()
        const allRepos = await repos.json()
        commit("getUser", allUser)
        commit("getRepos", allRepos)
      } catch (error) {
        console.log("Qandaydir xatolik yuz berdi");
      }
    }
  },
  getters: {
    sort(state){
      if(state.repository != null){
        return state.repository.sort((prev,next)=>{
          let i = 1
          if (prev[state.info]<next[state.info]) {
            return -i
          }
        })
      }
    }
  },
});

export default store;