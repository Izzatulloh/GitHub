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
  <button class="btn" @click="setUser">Bos</button>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
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
  mounted() {
    this.getUser();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1140px;
  width: 100%;
  margin: 0;
  padding: 0 15px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title {
  margin: 20px 0;
}
.label {
  display: flex;
  align-items: center;
  position: relative;
}
.input {
  width: 300px;
  height: 40px;
  background: #c0fff9;
  border-radius: 4px;
  padding: 9px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #000;
  border: 1px solid #97fcf2;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  outline: none;
  position: relative;
}
.close {
  position: absolute;
  width: 20px;
  right: 10px;
  cursor: pointer;
}
.btn {
  background: #c0fff9;
  color: #000;
  border: 1px solid #97fcf2;
  width: 100px;
  height: 30px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}
</style>
