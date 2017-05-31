import * as types from '../actions/action-types';

const initialState = {
    opponentGrid: []
};

const opponentGridReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.GET_OPPONENT_EMPTY_GRID_SUCCESS:
            return Object.assign({}, state, { opponentGrid: action.opponentGrid });
        default:
            return state;
    }
};

export default opponentGridReducer;
