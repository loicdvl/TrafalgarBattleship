import * as types from '../actions/action-types';

const initialState = {
    players: []
};

const playerReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_PLAYERS_SUCCESS:
            return Object.assign({}, state, { players: action.players });
        default:
            return state;
    }
};

export default playerReducer;
