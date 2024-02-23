import * as actionTypes from './types';
import {ActionType} from "../rootReducer";

export type InitialType = {
    count : number
}

const INITIAL_STATE : InitialType = {
  count : 0
};


const CartReducer = (state = INITIAL_STATE, action: ActionType): InitialType => {
    const { payload } = action;
    switch (action.type) {
        case actionTypes.RESET_STATE:
            return INITIAL_STATE;

        case actionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + payload
            };

        case actionTypes.DECREMENT:
            return {
                ...state,
                count: state.count - payload
            };

        default:
            return state;
    }
};


export default CartReducer;
