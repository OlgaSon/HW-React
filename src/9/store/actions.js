import { ADD, REMOVE, CHANGE } from './actionTypes'
import { FETCH_USERS, FETCH_USERS_REQUEST, FETCH_USERS_SUCCEES, FETCH_USERS_ERROR } from './actionTypes'



// 8 синхронные экшэны
// export const addGood = (data) => ({
//     type: ADD,
//     payload: data
// });

// export const changeGoods = (data) => ({
//     type: CHANGE,
//     payload: {
//         items: data
//     }
// });


// 1-2
// const fetchUsersRequest = () => ({
//     type: FETCH_USERS_REQUEST
// })

// const fetchUsersSuccsess = (data) => ({
//     type: FETCH_USERS_SUCCEES,
//     payload: data
// })

// const fetchUsersError = (error) => ({
//     type: FETCH_USERS_ERROR,
//     payload: error
// })

// export const fetchUsers = () => async (dispatch) => {
//     dispatch(fetchUsersRequest())

//     try {
//         let response = await fetch('https://api.github.com/users')
//         let result = await response.json();
//         dispatch(fetchUsersSuccsess())
//     } catch (error) {
//         dispatch(fetchUsersError(error))
//     }

// }

import {
    createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'fetchGithubUsers',
    async () => {
        let response = await fetch('https://api.github.com/users');
        let result = await response.json();
        return result;
    }
)











