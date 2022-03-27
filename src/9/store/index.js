// 8
// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import {
//     ADD,
//     REMOVE,
//     CHANGE
// } from './actionTypes'


// let initialState = {goods: [{id: '1', name: 'One'}, {id: '2', name: 'Two'}]};

// let reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD: {
//             return {
//                 ...state,
//                 goods: [...state.goods, action.payload]
//             }
//         }
//         case REMOVE: {
//             return {
//                 ...state,
//                 goods: state.goods.filter(item => item !== action.payload)
//             };
//         }
//         case CHANGE: {
//             let goods = state.goods;
//             let items = action.payload.items;
//             state.goods = [];
//             return {
//                 ...state,
//                 goods: goods.map(good => {
//                     let item = items.find(item => item.id === good.id);
//                     if (item) {
//                         return {
//                             ...good,
//                             name: item.name
//                         }
//                     }
//                     return good;
//                 })
//             }
//         }
//         default:
//             return state;
//     }
// }


// export let store = createStore(reducer, {}, applyMiddleware(thunk));


// 9
// 1-2
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import {
//     FETCH_USERS_REQUEST,
//     FETCH_USERS_SUCCEES,
//     FETCH_USERS_ERROR
// } from './actionTypes'

import {
    configureStore,
    createSlice,
} from '@reduxjs/toolkit';
import {
    fetchUsers
} from './actions';




// let initialState = {users: [], loading: false, error: null};

// let reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_USERS_REQUEST: {
//             return {
//                 ...state,
//                 loading: true
//             }
//         }
//         case FETCH_USERS_SUCCEES: {
//             return {
//                 ...state,
//                 users: action.payload,
//                 loading: false
//             };
//         }
//         case FETCH_USERS_ERROR: {
//             return {
//                 ...state,
//                 error: action.payload,
//                 loading: false
//             }
//         }
//         default:
//             return state;
//     }
// }


// // export let store = createStore(reducer, {}, applyMiddleware(thunk));
// export let store = createStore(reducer, applyMiddleware(thunk));






let initialState = {
    users: [],
    loading: false,
    error: null
};

const slice = createSlice({ /* createSlice() <- создаем редьюсеры */
    name: 'slice',
    initialState,
    reducers: {
        removeUser: (
            /*то что написано здесь */
        ) => { /* и здесь */}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }).addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const { 
    removeUser /* сработает здесь */
} = slice.actions;


export const store = configureStore({ /*  configureStore() <- конфигурирует хранилище */
    reducer: slice.reducer,
    devTools: true
})


// 2
// let reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_USERS_REQUEST: {
//             return {
//                 ...state,
//                 loading: true
//             }
//         }
//         case FETCH_USERS_SUCCEES: {
//             return {
//                 ...state,
//                 users: action.payload,
//                 loading: false
//             };
//         }
//         case FETCH_USERS_ERROR: {
//             return {
//                 ...state,
//                 error: action.payload,
//                 loading: false
//             }
//         }
//         default:
//             return state;
//     }
// }


// export let store = createStore(reducer, {}, applyMiddleware(thunk));
// export let store = createStore(reducer, applyMiddleware(thunk));