import {
  createStore
} from "vuex";
const store = createStore({
  state: {
    user: null,
    repository :null,
    userUrl :"https://api.github.com/users/"
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
        console.log(allUser);
        commit("getUser", allUser)
        commit("getRepos", allRepos)
      } catch (error) {
        console.log("Qandaydir xatolik yuz berdi");
      }
    }
  },
  getters: {
    setUser(state) {
      return state.user
    }
  },
});

export default store;