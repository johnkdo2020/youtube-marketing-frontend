import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import createSessionFilterSaga from '../lib/createSessionFilterSaga';
import * as orderAPI from '../lib/api/order';

// SessionStoreage 에서 받아오기
const [GET_CART_FILTER, GET_CART_FILTER_SUCCESS, GET_CART_FILTER_FAILURE] =
    createRequestActionTypes('order/GET_CART_FILTER');
// 주문서 작성 신청
const [CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE] =
    createRequestActionTypes('order/CREATE_ORDER');
// const SET_ORIGINAL_ORDER = 'order/SET_ORIGINAL_ORDER';
// // 주문서 작성 완료(retrieve)
const [GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILURE] =
    createRequestActionTypes('order/GET_ORDERS');
const PAYMENT_FAILURE = 'order/PAYMENT_FAILURE';
const UNLOAD_PAYMENT_ORDER = 'order/UNLOAD_PAYMENT_ORDER';

export const getCartFilter = createAction(GET_CART_FILTER);
export const createOrder = createAction(CREATE_ORDER, ({ response }) => ({
    response,
}));
// export const setOriginalOrder = createAction(SET_ORIGINAL_ORDER, payedOrder => payedOrder)
export const getOrder = createAction(GET_ORDER, (id) => id);
export const notSuccessedPayment = createAction(
    PAYMENT_FAILURE,
    ({ response }) => ({ response }),
);
export const unloadPaymentOrder = createAction(UNLOAD_PAYMENT_ORDER);

const getCartFilterSaga = createSessionFilterSaga(GET_CART_FILTER);
// const setOriginalOrderSaga = createRequestSaga(SET_ORIGINAL_ORDER, orderAPI.setOrder)
const createOrderSaga = createRequestSaga(CREATE_ORDER, orderAPI.createOrder);
const getOrderSaga = createRequestSaga(GET_ORDER, orderAPI.getOrder);

export function* CartFilterSaga() {
    yield takeLatest(GET_CART_FILTER, getCartFilterSaga);
    yield takeLatest(CREATE_ORDER, createOrderSaga);
    yield takeLatest(GET_ORDER, getOrderSaga);
}

const initialState = {
    order: null,
    orderError: null,
    payedOrder: null,
    payedOrderError: null,
};

const order = handleActions(
    {
        [GET_CART_FILTER_SUCCESS]: (state, { payload: order }) => ({
            ...state,
            order,
        }),
        [GET_CART_FILTER_FAILURE]: (state, { payload: orderError }) => ({
            ...state,
            orderError,
        }),
        [CREATE_ORDER_SUCCESS]: (state, { payload: payedOrder }) => ({
            ...state,
            payedOrder,
        }),
        [CREATE_ORDER_FAILURE]: (state, { payload: payedOrderError }) => ({
            ...state,
            payedOrderError,
        }),
        [GET_ORDER_SUCCESS]: (state, { payload: payedOrder }) => ({
            ...state,
            payedOrder,
        }),
        [GET_ORDER_FAILURE]: (state, { payload: payedOrderError }) => ({
            ...state,
            payedOrderError,
        }),
        [PAYMENT_FAILURE]: (state, { payload: payedOrderError }) => ({
            ...state,
            payedOrderError,
        }),
        [UNLOAD_PAYMENT_ORDER]: () => initialState,
    },
    initialState,
);
export default order;
