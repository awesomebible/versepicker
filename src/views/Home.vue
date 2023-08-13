<template>
  <div class="bg-gray-50 dark:bg-slate-900">
    <div class="p-10 gap-5 pb-2">
      <h2 class="text-4xl font-bold tracking-tight mb-2 dark:text-white">Versepicker</h2>
      <h3 class="text-2xl font-bold tracking-tight mb-10 dark:text-white">Versbilder für {{year}}</h3>
      <router-link to="/2024" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        2024
      </router-link>
      <router-link to="/2023" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        2023
      </router-link>
      <router-link to="/2022" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        2022
      </router-link>
      <router-link to="/2021" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        2023
      </router-link>
    </div>
    <Card v-bind:year="year" v-bind:day="day" v-for='day in 366' :key='day'/>
  </div>

  <section class="bg-white dark:bg-blue-900">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="https://awesomebible.de" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Home
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="https://chat.awesomebible.de" class="text-base leading-6 text-gray-500 hover:text-gray-900">
                    Discord
                </a>
            </div>
        </nav>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 awesomeBible, <a class="text-gray-400 hover:text-gray-500" href="https://github.com/awesomebible/verse-picker">open source</a> unter der GPLv3.
        </p>
    </div>
</section>
</template>
<script setup>
import Card from '@/components/Card.vue';
</script>
<script>
export default {
  data() {
    return {
      day: 1,
      year: new Date().getFullYear()
    }
  }
}
</script>
