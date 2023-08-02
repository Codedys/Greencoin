<template>
  <div class=" ">
    <img
      src="../assets/me.jpg"
      alt="Trust me I am handsome"
      class="rounded-full h-44 w-44 mt-8 mx-auto border-8 border-blue-600"
    />
    <div class="text-center pt-8 text-lg ">
      <h1><strong>Hello,I'm Jackson 👋</strong></h1>
      <p>
        I am a software engineer currently pursuing Computer Science at Kenyatta
        University.<br />
        I love chess, fifa and all things nerdy.<br />
        I also do not know why your laptop has a weird sound and I cannot hack
        you.
      </p>
    </div>
    <div class="mt-8 space-x-10 flex items-center justify-center">
      <button  class="text-xl p-4 border-2 bg-white rounded-lg text-black">
        Resume
      </button>
      
      <button @click="displayForm"  class="customcolor text-xl p-4 text-white rounded-lg">
        Contact me
      </button>
      
    </div>
     <div v-if="showForm">
    <contactForm @closeForm="displayForm"/>
  </div>
  </div>
  
</template>


<script>
import ContactForm from '../components/ContactForm.vue'
export default {
  name:"Home",
  components: { ContactForm },
  data() {
    return {
      showForm: false,
    
    };
  },
  methods: {
    displayForm() {
      this.showForm = !this.showForm
    }
  },


}
</script>