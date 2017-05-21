import * as types from '../actions/action-types';

export function getPlayersSuccess(parameters) {
    let players = parameters.players;

    return {
        type: types.GET_PLAYERS_SUCCESS,
        players
    };
}
