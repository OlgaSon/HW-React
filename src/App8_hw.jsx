import './App.css';
import React, {
    useState
} from "react";
import {
    Provider
} from 'react-redux'
import {store} from './8hw/store';
import ToDo from './8hw/ToDo'


function App8_hw() {
    return (
        <Provider store={store}>
        <ToDo></ToDo>
        </Provider>
    )
};


export default App8_hw;