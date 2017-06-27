import store from '../store';
import { getUserSuccess } from '../actions/user-actions';
import axios from 'axios';

export function setUser(user) {
   return store.dispatch(getUserSuccess({user: user}));
}

export function userSignupRequest(userData){
      return axios.post('http://localhost:54409/api/UserSignUp', {
          Username: userData.username,
          Password: userData.password,
          Email: userData.email
      }).then(response => {
          
      }).catch(error => {
          console.log(error);
      });
}

export function userLoginRequest(userData){
    return axios.post('http://localhost:54409/api/UserLogin', {
        Username: userData.username,
        Password: userData.password
    }).then(response => {
        if(response.data.Name === userData.username)
        {
            store.dispatch(getUserSuccess({user: response.data}));
            return response.data;
        }
    }).catch(error => {
        console.log(error);
    });
}

export function resetUserToDefault(){
    return store.dispatch(getUserSuccess({
        user: {
            Name: "#Anon"
        }
    }));
}