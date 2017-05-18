import axios from 'axios';
import store from '../store';
import { getUsersSuccess } from '../actions/user-actions';

export function searchUsers() {
    return axios.get('http://localhost:3001/player/getAllPlayers')
        .then(response => {
            store.dispatch(getUsersSuccess(response.data));
            return response;
        });
}

