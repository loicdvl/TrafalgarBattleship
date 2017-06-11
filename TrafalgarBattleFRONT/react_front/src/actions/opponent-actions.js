import * as types from '../actions/action-types';

export function getOpponentSuccess(parameters) {
    let opponent = parameters.user;

    return {
        type: types.GET_OPPONENT_SUCCESS,
        opponent
    };
}
