import './App.css';
import React, {
    useState
} from "react";
import {
    Provider
} from 'react-redux'
// import store from './8_api';
import store from './8_api/store';
import Todo from './8_api/Todo'


function App8_api() {
    return (
        <Provider store={store}>
        <Todo></Todo>
        </Provider>
    )
};


export default App8_api;