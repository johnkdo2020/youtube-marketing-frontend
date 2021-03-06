import { put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export default function createSessionSaga(type) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return function* () {
        yield put(startLoading(type));

        try {
            const cartdata = JSON.parse(sessionStorage.getItem('cart'));
            console.log(
                'get cart Test reducer 실행 , session 에서 데이터 뽑는곳 ',
            );
            console.log(cartdata);
            yield put({
                type: SUCCESS,
                payload: cartdata,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
        }
        yield put(finishLoading(type));
    };
}
