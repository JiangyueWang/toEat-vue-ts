import { statusList } from "./constants";

export type RecommendStatus = typeof statusList[number]


type Diet = 'vegan' | 'vegetarian' | 'gluten-free' | 'dairy-free' | 'nut-free' | 'none';
export interface Dish {
    name?: string;
    diet?: Diet;
    status: RecommendStatus;
  }