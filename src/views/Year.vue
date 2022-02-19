<template>
  <div class="bg-gray-50">
    <Card v-bind:year="year" v-bind:day="day" v-for='day in 36' :key='day'/>
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
      year:  this.$route.params.year
    }
  }
}
</script>
