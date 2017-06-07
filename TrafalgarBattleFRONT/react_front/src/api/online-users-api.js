import store from '../store';
import { getOnlineUserList } from '../actions/online-users-actions';

export function updateOnlineUserList(users) {
    store.dispatch(getOnlineUserList({onlineUsers: users}));
    return users;
}

