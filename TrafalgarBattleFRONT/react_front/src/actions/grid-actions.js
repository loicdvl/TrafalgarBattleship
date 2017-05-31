import * as types from '../actions/action-types';

export function getGridSuccess(parameters) {
    let playerGrid = parameters.playerGrid;

    return {
        type: types.GET_GRID_SUCCESS,
        playerGrid
    };
}

export function getOpponentEmptyGridSuccess(parameters) {
    let opponentGrid = parameters.opponentGrid;

    return {
        type: types.GET_OPPONENT_EMPTY_GRID_SUCCESS,
        opponentGrid
    };
}

