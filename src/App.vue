<template>
  <div>
  <router-link to="/">Home</router-link> |
   <router-link to="/projects">Projects</router-link>
   <router-link to="/about">About</router-link>
   <router-link to="/blog">Blog</router-link>
  </div>
  <router-view />
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>

</style>
