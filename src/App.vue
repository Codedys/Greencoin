<template>
  <!-- start of navigation bar -->
   <div v-if="!headerBar">
    <NavBarResponsive @closeBar="toggleNavbar"/>
   </div>
   <header v-if="headerBar"
    class="fixed top-0 left-0 right-0 z-10 flex items-center bg-white h-12 border-b-2 bg-opacity-95"
  >
  
  <div class="visible flex justify-start md:invisible ml-6">
    <i @click="toggleNavbar" class=" fa-solid fa-bars"></i>
  </div>

    <nav class=" invisible flex justify-center flex-1 md:visible">
      <div class="md:space-x-16 text-base">
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

    <div @click="toggleMode" class="flex justify-end mr-8">
      <i v-if="lightMode" class="far fa-lightbulb text-lg"></i>
      <i v-if="darkMode" class="fas fa-lightbulb text-lg"></i>
    </div>
  </header>
  
  <router-view />
  <!-- start of footer -->
  <footer class="mx-auto h-full w-full md:w-1/2 border-t-4 mt-8">
    <div class=" flex-wrap md:flex mt-16">
      <div class="ml-8 flex flex-col space-y-4 justify-start">
        <h4 class="text-lg font-bold">PAGES</h4>
        <nav>
          <ul class="text-custom-blue font-bold space-y-4">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
        </nav>
      </div>

      <div class="flex flex-1 justify-center">
        <div class="space-y-4 flex flex-col">
          <h4 class="text-lg font-bold">CONTACT</h4>
          <ul class="text-custom-blue font-bold space-y-4">
            <li>jacksongeraldobere@gmail.com</li>
            <li>+254759333587</li>
          </ul>
        </div>
      </div>
      <div class="mr-8 flex justify-end">
        <div class="flex space-y-4 flex-col">
          <h4 class="text-lg font-bold">INFO DIET</h4>
          <ul class="text-custom-blue font-bold space-y-4">
            <li>Bookmarks</li>
            <li>Newsletter</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center mt-8 space-x-10 mb-8">
      <a
        href="https://www.linkedin.com/in/jackson-obere-b04284236/"
        target="_blank"
        class="text-blue-500 text-4xl hover:text-8xl transition-all duration-500 ease-in-out"
      >
        <i class="fab fa-linkedin"></i>
      </a>
      <a
        href="https://twitter.com/Jackson__Gerald"
        target="_blank"
        class="text-blue-500 text-4xl hover:text-8xl transition-all duration-500 ease-in-out"
      >
        <i class="fab fa-twitter"></i>
      </a>
      <a
        href="https://github.com/Gerald-006"
        target="_blank"
        class="text-4xl hover:text-8xl transition-all duration-500 ease-in-out"
      >
        <i class="fab fa-github"></i>
      </a>
    </div>
  </footer>
</template>

<script>
 import NavBarResponsive from './components/NavBarResponsive.vue'
export default {
  name: "App",
   components: {NavBarResponsive},
  data() {
    return {
      lightMode: true,
      darkMode: false,
      headerBar: true,
    };
  },
  methods: {
    toggleMode() {
      this.lightMode = !this.lightMode;
      this.darkMode = !this.darkMode;
    },
    toggleNavbar(){
       this.headerBar =!this.headerBar;


    },
  },
};
</script>
