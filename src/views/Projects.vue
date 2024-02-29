<template>
  <div>
    <div class="h-32 w-72 mx-auto mt-8">
      <h6 class="font-bold text-center text-3xl"><strong>Products</strong></h6>
      <p class="text-center text-xl mt-2 mb-2 ">
        some products we have
      </p>
      <div  class="border-t-8 w-16 h-3 mx-auto rounded border-blue-600"></div>
    </div>

    <!-- Product Showcase Component -->
    <Product />
  </div>
</template>

<script>
// Import the ProductShowcase component
import Product from '../components/Product.vue';

export default {
  components: {
    Product
  }
};
</script>

<style>
/* You can add additional styles here */
</style>

