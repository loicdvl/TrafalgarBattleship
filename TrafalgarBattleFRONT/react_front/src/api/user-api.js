import store from '../store';
import { getUserSuccess } from '../actions/user-actions';

export function setUser(user) {
   return store.dispatch(getUserSuccess({user: user}));
}