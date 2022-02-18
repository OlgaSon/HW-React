import './App.css';
import React, { useState } from "react";
import { Provider } from 'react-redux'
import { store } from './8/store';
import Goods from './8/Goods'


function App8() {
    return (
    // <Goods></Goods>
    <Provider store={store}><Goods></Goods></Provider>)
    // )
};


export default App8;