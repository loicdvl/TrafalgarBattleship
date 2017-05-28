import axios from 'axios';
import store from '../store';
import { getGridSuccess } from '../actions/grid-actions';

export function getRandomGrid() {
    return axios.get('http://localhost:54409/api/Grid')
        .then(response => {
            if (response.status === 200 ) {
                store.dispatch(getGridSuccess({playerGrid: response.data}));
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
}


