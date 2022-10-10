import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
  state: {
    user: null,
    repository: null,
    userUrl: "https://api.github.com/users/",
    info: "name",
  },
  mutations: {
    getSort(state, payload) {
      state.info = payload;
    },
    getUser(state, payload) {
      state.user = payload;
    },
    getRepos(state, payload) {
      state.repository = payload;
    },
    getError(state, error) {
      if (state.repository.status == 403) {
        state.error = "Sizni limitingiz tugadi biror soat kutib turing...";
      } else {
        state.error = "Nimadir noto'g'ri ketib qoldi";
      }
    },
  },
  actions: {
    async getUser({ commit, state }, search) {
      try {
        const user = await axios.get(`${state.userUrl}${search}`);
        const repos = await axios.get(`${state.userUrl}${search}/repos`);
        commit("getUser", user.data);
        commit("getRepos", repos.data);
      } catch (error) {
        commit("getError", error);
      }
    },
  },
  getters: {
    sort(state) {
      if (state.repository != null) {
        return state.repository.sort((prev, next) => {
          let a = 1;
          let newPrev =
            state.info == "name"
              ? prev[state.info].toLowerCase()
              : prev[state.info];
          let newNext =
            state.info == "name"
              ? next[state.info].toLowerCase()
              : next[state.info];
          if (newPrev < newNext) {
            return -a;
          }
        });
      }
    },
  },
});

export default store;
