<script setup>
  import VLazyImage from "v-lazy-image";
</script>
<template>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 pb-2">
    <!--Card 1-->
    <div class="rounded overflow-hidden shadow-lg dark:bg-blue-950 dark:text-white">
      <v-lazy-image class="w-full" v-bind:src="'https://wsrv.nl/?url=verse.awesomebible.de/img/' + year + '/' + day + '.jpg&w=640'" loading="lazy" alt="Versbild"></v-lazy-image>
      <div class="px-6 py-4 pb-2">
        <div class="font-bold text-xl mb-1">Versbild {{year}} - {{day}}</div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <a target="_blank"
        rel="noopener noreferrer"
        v-bind:href="'https://verse.awesomebible.de/img/' + year + '/' + day + '.jpg'" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Öffne im neuen Tab</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        year: Number,
        day: Number
  }
}
</script>