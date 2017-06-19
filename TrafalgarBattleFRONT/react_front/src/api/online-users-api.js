import store from '../store';
import axios from 'axios';
import { getOnlineUsersSuccess } from '../actions/online-users-actions';

export function updateOnlineUserList(onlineUsers) {
    store.dispatch(getOnlineUsersSuccess({onlineUsers: onlineUsers}));
    return onlineUsers;
}

export function searchOnlineUser(query) {
    return axios.get('http://localhost:54409/api/Player/'+query)
        .then(response => {
            if (response.status === 200 ) {
                store.dispatch(getOnlineUsersSuccess({onlineUsers: response.data}));
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
}