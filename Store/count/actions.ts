import * as actionTypes from './types';
import { ActionType } from '../rootReducer';

const resetState = (): ActionType => ({
    type: actionTypes.RESET_STATE,
});

const increment = (newData: number): ActionType => ({
    type: actionTypes.INCREMENT,
    payload: newData,
});


const decrement = (newData: number): ActionType => ({
    type: actionTypes.DECREMENT,
    payload: newData,
});

const countActions = {
    resetState,
    increment,
    decrement
};

export default countActions;
