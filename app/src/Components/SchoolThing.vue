<template>
  <div>
    <h3> School: {{ school.school_name }}</h3>
    <p> SAT's Taken: {{ school.num_of_sat_test_takers }}</p>
    <p> Reading Average Score: {{ school.sat_critical_reading_avg_score }}</p>
    <p> Math Average Score: {{ school.sat_math_avg_score }}</p>
    <p> Writing Average Score: {{ school.sat_writing_avg_score }}</p>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  school: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: auto;
  width: 200px;
  border: 3px solid black;
}
</style>
