<template>
  <div class="bg-white">
    <!-- First Section -->
    <div class="flex flex-col items-center justify-center mt-8 p-10">
      <h1 class="mx-56 text-5xl font-bold mb-4">
        Greencoin is an innovative payment network and a new kind of money.
      </h1>
      <div class="flex space-x-4">
        <button class="customcolor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Get started with Greencoin
        </button>
        <button class="customcolor text-white font-semibold  py-2 px-4 border border-blue-500 rounded focus:outline-none focus:shadow-outline" type="button">
          Choose your wallet
        </button>
        <button class="customcolor text-white font-semibold  py-2 px-4 border border-blue-500 rounded focus:outline-none focus:shadow-outline" type="button">
          Buy Greencoin
        </button>
      </div>
     
    </div>
    <!-- Second Section -->
    <div class="flex flex-col items-center justify-center p-10">
      <div class="flex flex-wrap justify-center text-center mb-6">
        <div class="w-full md:w-1/3 p-4">
          <img src="placeholder-icon-1.png" alt="Fast Transactions" class="mx-auto mb-2">
          Fast peer-to-peer transactions
        </div>
        <div class="w-full md:w-1/3 p-4">
          <img src="placeholder-icon-2.png" alt="Worldwide Payments" class="mx-auto mb-2">
          Worldwide payments
        </div>
        <div class="w-full md:w-1/3 p-4">
          <img src="placeholder-icon-3.png" alt="Low Fees" class="mx-auto mb-2">
          Low processing fees
        </div>
      </div>
      <button class="customcolor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Get started with greencoin
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BitcoinSections',
  // Component logic goes here
};
</script>

<style scoped>
/* Additional styles if needed */
</style>

