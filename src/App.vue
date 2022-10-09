<template>
  <h1 class="title">GitHub Finder</h1>
  <label for="" class="label">
    <input
      type="text"
      class="input"
      v-model="search"
      @keydown.enter="setUser"
    />
    <img class="close" src="@/assets/images/close.svg" alt="" @click="close" />
  </label>
  <button class="btn" @click="setUser">Search</button>

  <div class="user" v-if="user">
    <div class="user__left">
      <img :src="user.avatar_url" alt="" />
      <a :href="user.html_url" class="user__left-btn">Visit GitHub</a>
    </div>
    <div class="user__right">
      <p class="user__login">{{ user.login }}</p>
      <p class="user__info">
        Repository: <span>{{ user.public_repos }}</span>
      </p>
      <p class="user__info">
        Created: <span>{{ new Date(user.created_at).toLocaleDateString() }}</span>
      </p>
      <p class="user__info">
        Followers: <span>{{ user.followers }}</span>
      </p>
      <p class="user__info">
        Following: <span>{{ user.following }}</span>
      </p>
    </div>
  </div>
  <p v-else class="user__not">Ma'lumot Yo'q</p>
  <Home/>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Home from "./pages/Home.vue";
export default {
    data() {
        return {
            search: "",
        };
    },
    methods: {
        ...mapActions(["getUser"]),
        setUser() {
            this.getUser(this.search);
            this.search = "";
        },
        close() {
            this.search = "";
        },
    },
    computed: {
        ...mapState(["user"]),
    },
    components: { Home }
};
</script>

<style>
@import url(./assets/style/main.css);
</style>
