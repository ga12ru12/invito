export const ADD_FOOD = 'ADD_FOOD';
export const REMOVE_FOOD = 'REMOVE_FOOD';
export const SOLD_OUT_FOOD = 'SOLD_OUT_FOOD';
export const AVAILABLE_FOOD = 'AVAILABLE_FOOD';
export const FOOD_STATUS = {
  SOLD_OUT: 'SOLD_OUT',
  AVAILABLE: 'AVAILABLE'
}

export function addNewFoodToMenu(data){
  return {
    type: ADD_FOOD,
    payload: data
  }
}

export function removeFoodFromMenu(id){
  return {
    type: REMOVE_FOOD,
    foodId: id
  }
}

export function soldOutFoodMenu(id){
  return {
    type: SOLD_OUT_FOOD,
    foodId: id
  }
}

export function availableFoodMenu(id){
  return {
    type: AVAILABLE_FOOD,
    foodId: id
  }
}
