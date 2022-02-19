<template>
  <div class="bg-gray-50">
    <div role="alert" class="p-10 gap-5 pb-2">
      <div class="bg-blue-500 text-white font-bold rounded-t px-4 py-2">
        Hinweis
      </div>
      <div class="border border-t-0 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700">
        <p>Gehe zu <code>picker.verse.awesomebible.de/&lt;jahr&gt;</code> um die Versbilder für ein spezifisches Jahr zu sehen.</p>
      </div>
    </div>
    <h2></h2>
    <Card v-bind:year="year" v-bind:day="day" v-for='day in 366' :key='day'/>
  </div>
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
