<template>
  <div class="container mx-auto p-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Products</h2>
      <p>Addressing the Carbon Development Knowledge Gap with Our Comprehensive Consulting
         Services: Project Advisory, Project Development, and Capacity Building

      </p>
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
import adviceImage from '@/assets/advice.jpeg';
import capacityImage from '@/assets/capacity.jpeg';
import communityImage from '@/assets/community.jpeg';
import financeImage from '@/assets/finance.jpeg';
import developmentImage from '@/assets/development.jpeg';
import ecosystemImage from '@/assets/ecosystem.jpeg';
export default {
  name: 'ProductShowcase',
  data() {
    return {
      products: [
        { id: 1, name: 'Project Advisory', description: " Green Coin's project advisory services provide expert guidance and strategic insights. We navigate the complexities of carbon projects, ensuring informed decision-making at every stage. Our advisors empower project proponents with the knowledge needed for success", image:adviceImage },
        { id: 2, name: 'Project Development', description: " Our project development services encompass the entire project lifecycle. From conceptualization and planning to execution, Green Coin focuses on developing impactful and sustainable carbon projects. We prioritize projects that contribute to environmental preservation and community well-being", image: developmentImage },
        { id: 3, name: 'Capacity Building', description: "Through capacity building, Green Coin empowers individuals and organizations with the skills and expertise needed for effective participation in the carbon industry. We believe that building capabilities leads to more informed decision-making and greater success in sustainable projects.", image: capacityImage },
        { id: 4, name: 'Ecosystem Integration', description: " Focused on enhancing cohesion, Green Coin brings together all stakeholders in the carbon ecosystem. By fostering collaboration, streamlining processes, and facilitating communication, we expedite the development and scaling of impactful projects.", image: ecosystemImage },
        { id: 5, name: 'Pre-financing:', description: " Green Coin pioneers innovative climate finance solutions, dismantling the financial barriers that hinder the scaling of African carbon markets. Our pre-financing mechanisms ensure that promising projects can move forward, contributing to a sustainable future", image: financeImage },
        { id: 6, name: 'Community', description: "Our platform provides a dedicated space for community members to share gains and collaborate on project development. Green Coin recognizes the importance of inclusivity and community-driven initiatives in achieving lasting sustainability.", image: communityImage }
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
