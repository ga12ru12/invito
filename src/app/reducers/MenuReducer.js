import { ADD_FOOD, REMOVE_FOOD, SOLD_OUT_FOOD, AVAILABLE_FOOD, FOOD_STATUS } from '../actions/MenuAction';
import { Map } from 'immutable';

function menu(state = [], action){
  switch (action.type){
    case ADD_FOOD:
      return state.push(Map(action.payload));
    case REMOVE_FOOD:
      return state.filter(food => food.get('id') !== action.foodId );
    case SOLD_OUT_FOOD:
      return state.update(
        state.findIndex(food => food.get('id') === action.foodId ),
        food => food.set("status", FOOD_STATUS.SOLD_OUT)
      );
    case AVAILABLE_FOOD:
      return state.update(
        state.findIndex(food => food.get('id') === action.foodId),
        food => food.set("status", FOOD_STATUS.AVAILABLE)
      )
    default:
      return state;
  }
}

export default menu;