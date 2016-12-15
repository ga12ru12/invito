export const REGISTER = 'REGISTER';

export function registerAction(username, password, email){
  return {
    type: REGISTER,
    username,
    password,
    email
  }
}