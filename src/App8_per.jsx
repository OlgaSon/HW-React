import './App.css';
import React, {useState} from "react";
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from './8_persist/store';
import Todo from './8_persist/Todo'


function App8_per() {
    return (
        <Provider store={store}>
        <PersistGate loading={<h2>loading...</h2>} persistor={persistor}>
        <Todo></Todo>
        </PersistGate>
        </Provider>
    )
};


export default App8_per;