<template>
  <div class="w-full fixed top-0 right-0 left-0 h-52 border-b-2 flex flex-col custombackground opacity-95">
    <div class=" pl-2 flex justify-start items-center mt-3 ml-4">
    <i @click="close" class=" fa-solid fa-xmark"></i>
  </div>
   
    <nav class="ml-4 mt-4">
      <ul class="text-black font-bold space-y-4">
        <li class="pl-2 active:bg-blue-400   hover:text-blue-600 mr-4"><router-link to="/">Home</router-link></li>
        <li class="pl-2 active:bg-blue-400 hover:bg-blue-400 hover:rounded hover:text-blue-600 mr-4"><router-link to="/projects">Projects</router-link></li>
        <li class="pl-2 active:bg-blue-400 hover:bg-blue-400 hover:rounded hover:text-blue-600 mr-4"><router-link to="/about">About</router-link></li>
        <li class="pl-2 active:bg-blue-400 hover:bg-blue-400 hover:rounded hover:text-blue-600 mr-4"><router-link to="/blog">Blog</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods :{
    close() {
      this.$emit('closeBar');
    },
  }
};
</script>

<style></style>
