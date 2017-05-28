import * as types from '../actions/action-types';

export function getGridSuccess(parameters) {
    let playerGrid = parameters.playerGrid;

    return {
        type: types.GET_GRID_SUCCESS,
        playerGrid
    };
}

