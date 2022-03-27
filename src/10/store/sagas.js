import { takeLatest, put, call, all, takeLatests } from "redux-saga/effects"
import { FETCH_USERS, FETCH_ONE_USER } from './actionTypes'
import { fetchUsersRequest, fetchUsersError, fetchUsersSuccess,
    fetchOneUserSuccess, fetchOneUserRequest, fetchOneUserError} from "./index"
import {APIfetchUsers, APIfetchOneUser} from '../API/index'

// 1
// function* fetchUsersWorker(action) {
//     // console.log('fetchUsers')
//     yield put(fetchUsersRequest());
//     try {
//         let result = yield call(APIfetchUsers);
//         yield put(fetchUsersSuccess(result));
//     }
//     catch (error) {
//         yield put(fetchUsersError(error));
//     }
// }



// export default function* rootSaga() {
//     yield takeLatest(FETCH_USERS, fetchUsersWorker)
// }


/* 2 */
function* fetchUsersWorker(action) {
    // console.log('fetchUsers')
    yield put(fetchUsersRequest());
    try {
        let result = yield call(APIfetchUsers);
        yield put(fetchUsersSuccess(result));
    }
    catch (error) {
        yield put(fetchUsersError(error));
    }

    // APIfetchOneUser
    // fetchOneUser
}


function* fetchOneUserWorker(action) {
    
    yield put(fetchOneUserRequest());
    try {
        let result = yield call(APIfetchOneUser);
        yield put(fetchOneUserSuccess(result));
    }
    catch (error) {
        yield put(fetchOneUserError(error));
    }

};


export default function* rootSaga() {
    yield all ([takeLatest(FETCH_USERS, fetchUsersWorker),    takeLatest(FETCH_ONE_USER, fetchOneUserWorker)])
}


// работа с асинхронными запросами.
// эффекты = возможности.
// пут - вызывает синхр экшн
// кол - асинхронный  - API, любой промис, сеттаймаут, другой воркер
