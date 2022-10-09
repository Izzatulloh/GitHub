<template>
  <div class="container">
    <div class="sort__div">
      <button
        
        class="sort__btn"
        v-for="(btn, index) in btns"
        :key="btn.name"
        :class="{ active: active == index }"
        @click="sortRepos(index, btn.url)"
        v-if="user"
        >
        {{ btn.name }}
      </button>
    </div>
    <div class="repos">
      <div v-for="repos in sort" :key="repos.id">
        <div class="repos__card">
          <div class="repos__info">
            <h1 class="repos__title">Repository name :</h1>
            <a class="repos__title" :href="repos.homepage" target="_blank">{{
              repos.name
            }}</a>
          </div>
          <p class="repos__star">
            Amount of stars: <span> {{ repos.stargazers_count }}⭐</span>
          </p>

          <p class="language">
            Language: <span>{{ repos.language }}</span>
          </p>
          <a
            class="user__left-btn repos_visit"
            :href="repos.html_url"
            target="_blank"
            >Visit Repos</a
          >
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
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 0,
      btns: [
        { name: "Name", url: "name" },
        { name: "Stars", url: "stargazers_count" },
        { name: "Date", url: "created_at" },
      ],
    };
  },
  computed: {
    ...mapState(["repository"]),
    ...mapGetters(["sort"]),
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["sort"]),
    ...mapMutations(["getSort"]),
    sortRepos(index, url) {
      this.active = index;
      this.getSort(url);
    },
  },
};
</script>
