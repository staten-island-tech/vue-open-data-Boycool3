<template>
  <div>
    <option value={{school}}>School: {{ school.school_name }} </option>
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