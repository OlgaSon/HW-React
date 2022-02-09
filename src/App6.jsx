import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import Home from './6/pages/Home'
import About from './6/pages/About'
import Articles from './6/pages/Articles'


// // 1.1. Несколько страниц(переход в адресной строке через /), 

// function App6() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<div>Home Page</div>}> </Route>
//       <Route path='next' element={<div>Next page</div>}></Route>
//     </Routes>
//   </BrowserRouter>
// };



// // 1.2. Cсылки на страницы через Link.
// // Outlet - вставка разного доп.содержимого в шаблон (Layout).


// const Layout = (props) => {
//   // console.log(props);

//   return <div>
//     <h3>Header and some text</h3>

//     <Link to="/">Home</Link>

//     <Outlet></Outlet>

//   </div>
// }

// function App6() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path='/' element=
//         {
//           <div>Home Page <br />
//             <Link to="/about/next">link to the about--next page</Link>
//           </div>
//         }>
//       </Route>
//       <Route path='about' element={<Layout></Layout>}>
//         <Route path='next' element={<div>Next page</div>}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// }



// // 1.3. Cсылки на страницы через useNavigate().
// const Layout = () => {

//   let navigate = useNavigate();

//   return <div>
//     <h3>Header and some text</h3>

//     <button onClick={() => {
//       navigate('/')
//       // не использовать тег a.
//     }}>to Home page
//     </button>

//     <Outlet></Outlet>
//   </div>
// }

// function App6() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path='/' element=
//         {
//           <div>Home Page <br />
//             <Link to="/about/next">link to the about--next page</Link>
//           </div>
//         }>
//       </Route>
//       <Route path='about' element={<Layout></Layout>}>
//         <Route path='next' element={<div>Next page</div>}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// }






// // 1.4. Определение ссылки в адресной строке useLocation().
// const Layout = () => {
//   let navigate = useNavigate();

//   let location = useLocation();
//   console.log(location);

//   return <div>
//     <h3>Header and some text</h3>
//     <button onClick={() => { navigate('/') }}>to Home page</button>
//     <Outlet></Outlet>
//   </div>
// }

// function App6() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path='/' element=
//         {
//           <div>Home Page <br />
//             <Link to="/about/next">link to the about--next page</Link>
//           </div>
//         }>
//       </Route>
//       <Route path='about' element={<Layout></Layout>}>
//         <Route path='next' element={<div>Next page</div>}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// }



// // 1.5 Ссылки и классовый компонент.

// class Test extends React.Component {
//   render() {
//     return <div>Test</div>;
//   };
// };

// function App6() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<div>Home Page <br />
//         <Link to="/about">link to the About page</Link>
//       </div>}> </Route>
//       <Route path='about' element=
//         {
//           <Test></Test>
//         }>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// }


// 1.6. path * : 404 Page not found

const Layout = () => {
  let navigate = useNavigate();
  return <div>
    <h3>Header and some text</h3>
    <button onClick={() => { navigate('/') }}>to Home page</button>
    <Outlet></Outlet>
  </div>
}

function App6() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Home Page <br />
        <Link to="/about/next">link to the about--next page</Link>
      </div>}> </Route>
      <Route path='about' element={<Layout></Layout>}>
        <Route path='next' element={<div>Next page</div>}></Route>
      </Route>

      <Route path='*' element={<div>404 Page not found</div>}></Route>

    </Routes>
  </BrowserRouter>
}



// 2. Несколько страниц, отдельно лежащих. Вверху страницы - ссылки на них.
// const Navigation = () => {
// return <ul>
// <li><Link to='/'>Home </Link></li>
// <li><Link to='about'>About </Link></li>
// <li><Link to='articles'>Articles</Link></li>
// <Outlet></Outlet>
// </ul>
// };

// function App6() {
// return <BrowserRouter>
// <Routes>
// <Route path='/' element={<Navigation></Navigation>}>
// <Route path='/' element={<Home></Home>}></Route>
// <Route path='about' element={<About></About>}></Route>
// <Route path='articles' element={<Articles></Articles>}></Route>
// </Route>
// </Routes>
// </BrowserRouter>
// };



// // 3. Авторизованный User может перейти в UserInfo, без авторизации - переадресует на HomePage
// const Profile = ({ isAuth }) => {
// const navigate = useNavigate();

// useEffect(() => {
// if (!isAuth) {
// navigate('/')
// }
// }, [])

// return isAuth && <div>
// <p>User info:</p>
// <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sed et, placeat doloribus eum rem earum, quo perspiciatis ullam ipsa ab magnam quia natus eius, iste aliquid aliquam debitis sint.</p>
// </div>
// };

// function App6() {
// const [isAuth, setIsAuth] = useState(false);

// return <BrowserRouter>

// <Link to='/profile'>Link to profile</Link>
// <button onClick={() => { setIsAuth(!isAuth) }}>{isAuth ? "we are auth" : 'we are not auth'}</button>

// <Routes>
// <Route path='/' element={<div>HomePage</div>}> </Route>
// <Route path='/profile' element={<Profile isAuth={isAuth} />}> </Route>
// <Route path='/admin' element={<Profile isAuth={isAuth} />}> </Route>
// </Routes>

// </BrowserRouter>
// }


// 4. Роли и доступ

// const PrivateRoute = ({ isAllow, children }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!isAllow) {
//       navigate('/');
//     };
//   }, []);
//   return isAllow ? children : null;
// };

// const Profile = () => {
//   return <div> UserInfo</div>;
// };

// const Admin = () => {
//   return <div> AdminInfo</div>;
// };

// function App6() {
//   const [userRole, setUserRole] = useState('guest');

//   return <BrowserRouter>

//     <Link to='/'>go to Home page</Link> <br />
//     <Link to='/profile'>go to Profile</Link> <br />
//     <Link to='/admin'>go to Admin</Link> <br />

//     <button onClick={() => { setUserRole('user') }}>User</button>
//     <button onClick={() => { setUserRole('admin') }}>Admin</button>

//     <Routes>
//       <Route path='/' element={<div>HomePage</div>}></Route>;
//       <Route path='/profile' element={
//         <PrivateRoute isAllow={userRole === 'user' || userRole === 'admin'}>
//           <Profile />
//         </PrivateRoute>} >
//       </Route>
//       <Route path='/admin' element={
//         <PrivateRoute isAllow={userRole === 'admin'}>
//           <Admin />
//         </PrivateRoute>} >
//       </Route>
//     </Routes>

//   </BrowserRouter>;
// };


export default App6;




// //5. Доп.
// import { createContext, Context, useContext, } from "react";
// // useState, useEffect
// // import PropTypes from "prop-types";
// import "./App.css";
// import { useMatch, useParams, useSearchParams, useLocation, } from "react-router-dom";
// // BrowserRouter, Route, Routes, useNavigate,


// // const PageContainer = () => (
// // <>
// // HELLO
// // <Routes>
// // <Route index element={<div>index</div>}></Route>
// // <Route path="hello" element={<div>hello</div>}></Route>
// // </Routes>
// // </>
// // );




// const PageArticles = () => <div>Articles</div>;

// const PageArticle = () => {
// const navigate = useNavigate();
// const { id } = useParams();

// useEffect(() => {
// if (id === "100") {
// navigate("/articles");
// }
// }, [id]);

// const handleClick = () => {
// navigate(`/articles/${+ id + 1}`);
// };
// const handleClickPrev = () => {
// navigate(`/articles/${+ id - 1}`);
// };

// if (id === "100") {
// return <></>;
// }

// return (
// <div>
// Article {id}
// <br></br>
// <button onClick={handleClick}>Go next article</button>
// <button onClick={handleClickPrev}>Go prev article</button>
// </div>
// );
// };

// function App() {
// return (
// <BrowserRouter>
// <Routes>
// <Route path="articles" element={<PageArticles></PageArticles>}></Route>
// <Route
// path="articles/:id"
// element={<PageArticle></PageArticle>}
// ></Route>
// </Routes>
// </BrowserRouter>
// );
// }

// export default App;