import axios from 'axios';
import store from '../store';
import { getPlayersSuccess } from '../actions/player-actions';

export function getAllPlayers() {
    return axios.get('http://localhost:54409/api/Player')
        .then(response => {
            if (response.status === 200 ) {
                store.dispatch(getPlayersSuccess({players: response.data}));
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
}

export function searchPlayer(query = 'Loic') {
    return axios.get('http://localhost:54409/api/Player/'+query)
        .then(response => {
            if (response.status === 200 ) {
                store.dispatch(getPlayersSuccess({players: response.data}));
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
}

