<template>
  <header class="flex items-center bg-white h-12 border-b-2">
    <nav class="flex justify-center flex-1">
      <div class="space-x-16 text-base">
        <router-link
          to="/"
          class="p-3 hover:bg-blue-300 hover:rounded"
          active-class="active-link"
          exact-active-class="active-link"
          >Home</router-link
        >
        <router-link
          to="/projects"
          class="p-3 hover:bg-blue-300 hover:rounded active:border-b-4 active:border-blue-500"
          active-class="active-link"
          exact-active-class="active-link"
          >Projects</router-link
        >
        <router-link
          to="/about"
          class="p-3 hover:bg-blue-300 hover:rounded"
          active-class="active-link"
          exact-active-class="active-link"
          >About</router-link
        >
        <router-link
          to="/blog"
          class="p-3 hover:bg-blue-300 hover:rounded"
          active-class="active-link"
          exact-active-class="active-link"
          >Blog</router-link
        >
      </div>
    </nav>

    <div @click="toggleMode" class="flex justify-end pr-20">
      <i v-if="lightMode" class="far fa-lightbulb text-lg"></i>
      <i v-if="darkMode" class="fas fa-lightbulb text-lg"></i>
    </div>
  </header>

  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      lightMode: true,
      darkMode: false,
    };
  },
  methods: {
    toggleMode() {
      this.lightMode = !this.lightMode;
      this.darkMode = !this.darkMode;
    },
  },
};
</script>
