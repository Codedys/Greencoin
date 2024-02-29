<template>
  <div class="container mx-auto p-6">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-6">About Us</h1>
      <p class="text-lg mb-12">Learn more about our team, our mission, and our vision.</p>
    </div>

    <div v-scroll-animation="'fadeIn'" class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget est sed lorem sollicitudin rutrum.</p>
    </div>

    <div v-scroll-animation="'fadeInUp'" class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Our Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
        <!-- Team members -->
        <div class="team-member bg-white p-6 shadow-lg rounded-lg" v-for="n in 3" :key="n">
          <div class="mb-4">
            <img class="w-full h-48 object-cover rounded-md" :src="`https://via.placeholder.com/300x200?text=Member+${n}`" alt="">
          </div>
          <h3 class="text-xl font-bold">Member Name</h3>
          <p class="text-gray-600">Member Role</p>
        </div>
      </div>
    </div>

    <div v-scroll-animation="'fadeIn'" class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Values We Stand For</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(value, index) in values" :key="value" class="value-card bg-white p-6 shadow-lg rounded-lg"
             :style="{ animationDelay: index * 0.1 + 's' }" v-scroll-animation="'fadeInUp'">
          <p>{{ value }}</p>
        </div>
      </div>
    </div>

    <div v-scroll-animation="'fadeIn'" class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Our Vision</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
    </div>

    <div v-scroll-animation="'fadeInRight'" class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Innovative Approach</h2>
      <p>We embrace change and innovation. We're always looking for new and better ways to achieve our goals.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      values: [
        'Integrity and Honesty',
        'Innovation and Creativity',
        'Commitment to Excellence',
        'Sustainability and Responsibility',
      ],
    };
  },
  directives: {
    scrollAnimation: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                el.classList.add('animated', binding.value);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.1,
          }
        );
        observer.observe(el);
      },
    },
  },
};
</script>

<style>
.animated {
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.fadeIn {
  animation: fadeIn 1s forwards;
}

.fadeInUp {
  animation: fadeInUp 1s forwards;
}

.fadeInRight {
  animation: fadeInRight 1s forwards;
}
</style>
