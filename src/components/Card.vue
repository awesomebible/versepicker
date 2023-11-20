<script setup>
import VLazyImage from "v-lazy-image";
</script>
<template>
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure><v-lazy-image class="w-full"
          v-bind:src="'https://versepicker.netlify.app/.netlify/images?url=https://verse.awesomebible.de/img/' + year + '/' + day + '.jpg&w=640&output=webp'" loading="lazy"
          alt="Versbild"></v-lazy-image></figure>
      <div class="card-body">
        <h2 class="card-title">Versbild {{ year }} - {{ day }}</h2>
        <p>Das Versbild für das folgende Datum: {{ dateFromDay(year, day).toLocaleDateString() }}</p>
        <div class="card-actions">
          <a target="_blank" rel="noopener noreferrer"
            v-bind:href="'https://verse.awesomebible.de/img/' + year + '/' + day + '.jpg'" type="button"
            class="btn btn-primary w-full">Öffne im neuen Tab</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    year: Number,
    day: Number
  },
  methods: {
    dateFromDay(year, day) {
      var date = new Date(year, 0); // initialize a date in `year-01-01`
      return new Date(date.setDate(day)); // add the number of days
    }
  }
}
</script>