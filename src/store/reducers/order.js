import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    error: null,
    loading: false
}

const reducers = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderdata,
                id: action.orderId
            }
            return {
                ...state,
                orders: state.orders.contact(newOrder),
                loading: false
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }

};

export default reducers;