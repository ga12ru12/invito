import { LOGIN, USER_STATUS } from '../actions/LoginAction';

const initialState = {
  USER_STATUS: USER_STATUS.ANONYMOUS
}

function loginState(state = initialState, action){
  switch (action.type){
    case LOGIN:
      return Object.assign({}, state, {
        USER_STATUS: USER_STATUS.AUTHENTICATED
      })
    default:
      return state;
  }
}

export default loginState;