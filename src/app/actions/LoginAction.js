export const LOGIN = 'LOGIN';
export const USER_STATUS = {
  ANONYMOUS: 'ANONYMOUS',
  AUTHENTICATED: 'AUTHENTICATED'
};

export function loginAction(username, password){
  return {
    type: LOGIN,
    username,
    password
  }
}