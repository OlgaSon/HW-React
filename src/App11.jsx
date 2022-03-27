import './App.css';
import React, { Suspense, lazy } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//1. Обычный вариант:
// import Home from './11/Home'
// import About from './11/About'

// 2. Suspense + lazy:
const Home = lazy(()=> import('./11/Home'));
const About = lazy(()=> import('./11/About'));


function App11() {
    return (
    <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
            <Routes>
                <Route path='/home' element = {<Home/>}></Route>
                <Route path='/about' element = {<About/>}></Route>
            </Routes>
        </BrowserRouter>
    </Suspense>
    )
};


//3. react-virtualized/react-window
// для больших перечней (списков, гридов, таблиц) чтобы отображать только 10 из 100 000 , например.


// 4. React-testing-library 
// npm run tests 
// App.test.js - все запустятся. Лежат или с компонентами в папке tests, или в отдельной папке.
// test(описание = что д.б в итоге, функция {screen.куча методов}, expect - или зеленое, или строчка подсвечена)
// describe() - объединять тесты в группы


// 5. Анимации
// @key-frames название ...
// React Transition Group


// 6. useReducer
// альтернатива между Redux и UseState


export default App11;