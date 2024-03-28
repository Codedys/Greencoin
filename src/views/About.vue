<template>
  <div class="container mx-auto p-6">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-6">About Us</h1>
      <p class="text-lg mb-12">Learn more about our team, our mission, and our vision.</p>
    </div>

    <div v-scroll-animation="'fadeIn'" class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
      <p>Greenifing Africa's Carbon Potential for sustainable Prosperity through innovative eco-funding and green governance.
        In our commitment to transforming carbon markets in Africa,Green Coin emerges as a revolutionary platform,leveraging technology to revolultionize finance,improve community governance, and enhance integrity with carbon markets.
        
      </p>
    </div>

    <div v-scroll-animation="'fadeInUp'" class="text-center mb-12">
    <h2 class="text-3xl font-bold mb-4">Our Team</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
  <!-- Team members -->
  <div class="team-member bg-white p-6 shadow-lg rounded-lg" v-for="member in teamMembers" :key="member.id">
    <div class="mb-4">
      <img class="w-full h-48 object-cover rounded-md" :src="member.photoUrl" :alt="member.name">
    </div>
    <h3 class="text-xl font-bold">{{ member.name }}</h3>
    <p class="text-gray-600">{{ member.role }}</p>
    <!-- Member description -->
    <div class="member-description mt-4 text-gray-700">
      {{ member.description }}
    </div>
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
      <p>Empowering a sustainable future through innovative financial solutions.</p>
    </div>

    <div v-scroll-animation="'fadeInRight'" class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Innovative Approach</h2>
      <p>We embrace change and innovation. We're always looking for new and better ways to achieve our goals.</p>
    </div>
  </div>
</template>

<script>
import izoImage from '@/assets/izo.jpeg';
import meImage from '@/assets/me.jpeg';
import morrisImage from '@/assets/morris.jpeg'
import jeseeImage from '@/assets/jesee.jpeg'
import sidoImage from '@/assets/sido.jpeg'
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
      teamMembers: [
       
        {
          id: 1,
          name: 'Isaac Yoosi',
          role: 'Chief Executive Officer',
          photoUrl: izoImage,
          description: "Yoosi spearheads the strategic direction of Green Coin, embodying the company's vision and overseeing the cultivation of partnerships with carbon offset project developers. His role as the chief architect of the company's strategy involves fostering relationships and executing initiatives to ensure a consistent flow of projects. Additionally, Yoosi serves as the CEO of Afrominds Technologies, a venture incubated within the Chandaria Incubation Center, leveraging his expertise with a Bachelor's degree in Computer Science.",
        },
        {
          id: 2,
          name: 'Morris Ochonya',
          role: 'Lead Financial Strategist',
          photoUrl: morrisImage,
          description: "Morris Ochonya, as Green Coin's Carbon Methodologies Lead, leverages his profound environmental acumen, regulatory comprehension, and global outlook to champion sustainable carbon initiatives, propelling the world towards a more eco-friendly future. With a Bachelor's degree in Landscape Architecture, Morris brings a unique blend of expertise to the forefront of Green Coin's endeavors, steering the company towards impactful environmental stewardship.",
        },
        {
          id: 3,
          name: 'Sydney Arisi',
          role: 'Chief Operating Officer',
          photoUrl: sidoImage,
          description: "I believe the mind holds the capacity to fulfill whatever you dream. An entrepreneur in mind and humanitarian at heart. Iʼm passionate about building great products that make peopleʼs lives easier and offer innovative futuristic solutions . I have spent over 5 years strategizing innovative digital experiences for LORDON LLC, which is a strategy and marketing consultancy firm based in kenya founded by myself. I grew up in Kenya, am an avid humanitarian, working with Seito CBO which is an organization focused on bettering lives of the pastoral communities.",
        },
        {
          id: 4,
          name: 'Jesee Mwathie',
          role: 'Chief Marketing Officer',
          photoUrl: jeseeImage,
          description:"Jesse Mwathe leads the charge in innovative research within digital Monitoring, Reporting, and Verification (dMRV), focusing on enhancing its application across various projects. With a Bachelor's in Urban Planning from The University of Nairobi, Jesse offers deep, extensive knowledge in dMRV, positioning him as a key figure in driving advancements and efficiency in this specialized area. His work not only showcases his expertise but also his commitment to leveraging digital tools for more effective project management and sustainability practices",
        },
        {
          id: 5,
          name: 'Gerald Jackson',
          role: 'Lead Developer',
          photoUrl: meImage,
          description: "Gerald Jackson, our Tech Lead, is a beacon of innovation and guidance in the tech field. With a strong background in software development and a degree in Computer Science, Gerald has been key in steering our team through challenging and groundbreaking projects. Known for his collaborative leadership style and a keen eye for impactful technology solutions, Gerald embodies the drive and vision that propel our team forward, making a significant mark in the tech industry",
        },
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
