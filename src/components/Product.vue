<template>
  <div class="container mx-auto p-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Products</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(product, index) in products" :key="product.id" class="card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
           :style="{ animation: 'comeTogether 0.5s ease-out', animationDelay: index * 0.1 + 's' }">
        <img class="w-full h-48 object-cover object-center" :src="product.image" :alt="product.name">
        <div class="p-4">
          <h3 class="text-xl text-gray-800">{{ product.name }}</h3>
          <p class="text-gray-600">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductShowcase',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'Description for Product 1', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', description: 'Description for Product 2', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', description: 'Description for Product 3', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', description: 'Description for Product 4', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Product 5', description: 'Description for Product 5', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Product 6', description: 'Description for Product 6', image: 'https://via.placeholder.com/150' }
      ],
    };
  },
};
</script>

<style>
@keyframes comeTogether {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.card {
  cursor: pointer;
  will-change: transform;
}
</style>
