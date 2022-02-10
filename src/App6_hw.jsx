import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom'
import Sidebar from './6/pages_hw/Sidebar'
import Home from './6/pages_hw/Home'
import Contacts from './6/pages_hw/Contacts'
import Reviews from './6/pages_hw/Reviews'
import Review from './6/pages_hw/Review'
import './6/pages_hw/Sidebar.css';
import './6/pages_hw/Contacts.css';
import './6/pages_hw/Reviews.css';

// const Layout = () => {
//   return (
//     // <div>
//       <Sidebar>
//         <div>
//           <Outlet></Outlet>
//         </div>
//       </Sidebar>
//     // </div>
//   )
// };

function App6_hw() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=
          {<>
            <Sidebar></Sidebar>
            <Home></Home>
          </>}>
        </Route>

        <Route path='contacts' element=
          {<>
            <Sidebar></Sidebar>
            <Contacts></Contacts>
          </>}>
        </Route>

        <Route path='reviews' element=
          {<>
            <Sidebar></Sidebar>
            <Reviews></Reviews>
          </>}>
        </Route>

        <Route path="/reviews/:reviewId" element={<Review></Review>}></Route>

        <Route path="*" element={<div>Eror 404: page not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  </>
};


export default App6_hw;


/* Создать странички Home, Contacts, Reviews и боковое меню для переключения по страничкам. 
Добавить пару отзывов на страницу с возможностью перехода на конкретный отзыв по клику 
на заголовок отзыва. Остальные страницы наполнить любым контентом. */