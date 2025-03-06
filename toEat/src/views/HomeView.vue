<script setup lang="ts">
import { ref } from 'vue'
/**
 * Restaurants
 * 
 * name: string
 * address: string
 * status: string (e.g "want to try" | "must try" | "loved it")
 * dishes: array of Dish objects
 */

// const restaurantStatusList = [
//   'want to try',
//   'recommended',
//   'do not recommended',
//   'must try'
// ] as const; // set s readonly array in typescript
// generate a union type from the array
// type recommendedStatus = typeof restaurantStatusList[number];

 interface Restaurant {
  name?: string;
  status?: restaurantStatus;
  dishes?: Dish[];
}
interface Dish {
  name: string;
  diet?: Diet;
  status: restaurantStatus;
}
type Diet = 'vegan' | 'vegetarian' | 'gluten-free' | 'dairy-free' | 'nut-free' | 'none';
type restaurantStatus = 'want to try' | 'recommended' | 'do not recommended' | 'must try';
const statusList = [ 'want to try', 'recommended', 'do not recommended', 'must try'];

const resturantList = ref<Restaurant[]>([]);
const newRestaurant = ref<Restaurant>({});

function addResturant() {
  resturantList.value.push({
    name: newRestaurant.value.name,
    status: newRestaurant.value.status,
    dishes: []
  });
  console.log(resturantList.value)
}

</script>

<template>
  <main>
    <pre>
      {{ newRestaurant }}
    </pre>
    <!-- creat a form that allows uwer to add a resturant to a list-->
    <form @submit.prevent="addResturant">
      <div>
        <label for="restaurant-name">Restaurant Name</label>
        <input id="restaurant-name" v-model="newRestaurant.name" type="text"></input>
      </div>
      <div>
        <label for="restaurant-status">Status</label>
        <select name="restaurant-status" id="restaurant-status" v-model="newRestaurant.status">
          <option v-for="status in statusList" :key="status" :value="status">{{ status }}</option>
        </select>
      </div>

      <RouterLink :to="{name: 'dishes'}">add dishes</RouterLink>
      <button type="submit">Add Resturant</button>

    </form>

    <ul>
      <li v-for="restaurant in resturantList" :key="restaurant.name">{{ restaurant.name }} - {{ restaurant.status }}</li>
    </ul>

  </main>
</template>
