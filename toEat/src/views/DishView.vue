<script setup lang="ts">
import { ref } from 'vue'
import { statusList } from '@/constants';
import type { Dish } from '@/types';

const dishList = ref<Dish[]>([]);
const newDish = ref<Dish>({
  status: 'want to try'
});

function addDish() {
  dishList.value.push({
    name: newDish.value.name,
    diet: newDish.value.diet,
    status: newDish.value.status,
  });
}

</script>

<template>
  <main>
    <pre>
      {{ newDish }}
    </pre>
    <!-- creat a form that allows uwer to add a resturant to a list-->
    <form @submit.prevent="addDish">
      <div>
        <label for="dish-name">dish Name</label>
        <input id="dish-name" v-model="newDish.name" type="text"></input>
      </div>
      <div>
        <label for="dish-diet">Diet</label>
        <select name="dish-diet" id="dish-diet" v-model="newDish.diet">
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="dairy-free">Dairy-Free</option>
          <option value="nut-free">Nut-Free</option>
          <option value="none">None</option>
        </select>
      </div>
      <div>
        <label for="dish-status">Status</label>
        <select name="dish-status" id="dish-status" v-model="newDish.status">
          <option v-for="status in statusList" :key="status" :value="status">{{ status }}</option>
        </select>
      </div>


      <button type="submit">Add Dish</button>

    </form>

    <ul>
      <li v-for="dish in dishList" :key="dish.name">{{ dish.name }} - {{ dish.status }}</li>
    </ul>

  </main>
</template>
