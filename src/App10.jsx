import './App.css';
import React, { useState } from "react";
import { Provider } from 'react-redux'
import { store } from './10/store';
import Users from './10/Users'


function App9() {
    return (
    <Provider store={store}><Users></Users></Provider>
    )
};


export default App9;