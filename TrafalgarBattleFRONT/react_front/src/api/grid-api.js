import axios from 'axios';
import store from '../store';
import { getOpponentEmptyGridSuccess } from '../actions/grid-actions';

export function getEmptyGrid() {
    return axios.get('http://localhost:54409/api/Grid/empty')
        .then(response => {
            if (response.status === 200 ) {
                store.dispatch(getOpponentEmptyGridSuccess({opponentGrid: response.data}));
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
}


