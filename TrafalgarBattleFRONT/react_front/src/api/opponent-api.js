import axios from 'axios';
import store from '../store';
import { getOpponentSuccess } from '../actions/opponent-actions';

export function getOpponent() {
    return axios.get('http://localhost:54409/api/Player/')
        .then(response => {
            if (response.status === 200 ) {
                store.dispatch(getOpponentSuccess({opponent: response.data}));
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
}

