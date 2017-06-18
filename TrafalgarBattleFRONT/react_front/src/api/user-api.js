import store from '../store';
import { getUserSuccess } from '../actions/user-actions';
import axios from 'axios';

export function setUser(user) {
   return store.dispatch(getUserSuccess({user: user}));
}

export function userSignupRequest(userData){
      return axios.post('http://localhost:54409/api/User', userData);
}

export function userLoginRequest(userData){
    return axios.post('http://localhost:54409/api/User', userData);
}