<template>
  <div class="container">
    <button>{{}}</button>
    <div class="repos">
      <div v-for="repos in sort" :key="repos.id">
        <div class="repos__card">
          <div class="repos__info">
            <h1 class="repos__title">Repository name :</h1>
            <a class="repos__title" :href="repos.html_url" target="_blank">{{
              repos.name
            }}</a>
          </div>
          <p class="repos__star">
            Amount of stars: <span> {{ repos.stargazers_count }}⭐</span>
          </p>

          <p class="language">
            Language: <span>{{ repos.language }}</span>
          </p>
          <p class="repos__data">
            {{ new Date(repos.created_at).toLocaleDateString() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      btns:[{name:"Name",url:""}]
    };
  },
  computed: {
    ...mapState(["repository"]),
    ...mapGetters(["sort"]),
  },
  methods: {
    ...mapActions(["getRepos"]),
  },
  mounted() {
    this.getRepos();
  },
};
</script>
