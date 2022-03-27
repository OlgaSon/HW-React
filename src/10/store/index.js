import {
    configureStore,
    createSlice,
} from '@reduxjs/toolkit';
import {
    fetchUsers
} from './actions';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'



//1
// let initialState = {
//     users: [],
//     loading: false,
//     error: null,
//     // user : null
// };

// const slice = createSlice({ /* createSlice() <- создаем редьюсеры */
//     name: 'slice',
//     initialState,
//     reducers: {
//         fetchUsersSuccess: (state, action) => {
//             state.loading = false;
//             state.users = action.payload;
//         },
//         fetchUsersRequest: (state) => {
//             state.loading = true;
//         },
//         fetchUsersError: (state, action) => {
//             state.loading=false;
//             state.error = action.payload;
//         }
//         // fetchUsersError: (state, action) => {
//         //     state.loading=false;
//         //     state.error = action.payload;
//         // }
//     },

// });

// export const { 
//     fetchUsersSuccess,
//         fetchUsersRequest,
//         fetchUsersError
// } = slice.actions;


// const sagaMiddleware = createSagaMiddleware();


// export const store = configureStore({ /*  configureStore() <- конфигурирует хранилище */
//     reducer: slice.reducer,
//     middleware: (defaultMiddleware) => {
//         return defaultMiddleware().concat(sagaMiddleware);
//     },
//     devTools: true
// })

// sagaMiddleware.run(rootSaga)

/* 2 */
let initialState = {
    users: [],
    loading: false,
    error: null,
    user : {}
};

const slice = createSlice({ /* createSlice() <- создаем редьюсеры */
    name: 'slice',
    initialState,
    reducers: {
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        fetchUsersRequest: (state) => {
            state.loading = true;
        },
        fetchUsersError: (state, action) => {
            state.loading=false;
            state.error = action.payload;
        },

        fetchOneUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        fetchOneUserRequest: (state) => {
            state.loading = true;
        },
        fetchOneUserError: (state, action) => {
            state.loading=false;
            state.error = action.payload;
        },
    },

});

export const { 
    fetchUsersSuccess,
        fetchUsersRequest,
        fetchUsersError,
        fetchOneUserSuccess,
        fetchOneUserRequest,
        fetchOneUserError

} = slice.actions;


const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({ /*  configureStore() <- конфигурирует хранилище */
    reducer: slice.reducer,
    middleware: (defaultMiddleware) => {
        return defaultMiddleware().concat(sagaMiddleware);
    },
    devTools: true
})

sagaMiddleware.run(rootSaga)