<template>
    <p>Hi</p>
    <button @click="getData"> Test Thing</button>
    <select name="school" id="school">
      <option value="">Choose a School</option>
      <option> <SchoolThing
      v-for="school in Thing"
      :key="school.school_name"
      :school="school"
    >
    </SchoolThing>
      </option>
    </select>
    <div class="container">
      <SchoolThing
      v-for="school in Thing"
      :key="school.school_name"
      :school="school"
    >
    </SchoolThing>
    </div>
  <h2> {{ Thing }}</h2>
</template>

<script setup>
import SchoolThing from '@/Components/SchoolThing.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const Thing = ref()
async function getData  () {
  const response = await fetch(`https://data.cityofnewyork.us/resource/f9bf-2cp4.json`)
  const data = await response.json()
  Thing.value = data
}
/*
Thing.forEach(school => {
  const option = 
  
});
       {{v-for=`school in Thing` 
        :value=`school.school_name` 
        :key=`school.school_name`}}
*/
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: auto;
  width: 1875px;
  border: 3px solid rgb(255, 228, 187);
}
</style>
