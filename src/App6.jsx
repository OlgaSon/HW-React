import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom'
import Home from './6/pages/Home'
import About from './6/pages/About'
import Articles from './6/pages/Articles'


// 1. Несколько страниц(переход в адресной строке через /), ссылки на них через кнопку(navigate) и Link.
// const Layout = () => {
//   let navigate = useNavigate();
//   return <div>
//     <div>Header and some text</div>

//     <button onClick={() => {
//       navigate('/')
//       // не использовать тег a.
//     }}>to Home page
//     </button>
//     <br />

//     <Link to="/">Home</Link>

//     <Outlet></Outlet>
//   </div>
// }

// function App6() {
//   return <BrowserRouter>
//     <Link to="/about/new">link to the /about/new page</Link>
//     <Routes>
//       <Route path='/' element={<div>Home Page</div>}> </Route>
//       <Route path='/about' element={<Layout></Layout>}></Route>
//       <Route path='/next' element={<div>next</div>}></Route>
//     </Routes>
//   </BrowserRouter>
// }



// 2. Несколько страниц, отдельно лежащих. Вверху страницы - ссылки на них.
// const Navigation = () => {
//   return <ul>
//     <li><Link to='/'>Home </Link></li>
//     <li><Link to='about'>About </Link></li>
//     <li><Link to='articles'>Articles</Link></li>
//     <Outlet></Outlet>
//   </ul>
// };

// function App6() {
//   return <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Navigation></Navigation>}>
//         <Route path='/' element={<Home></Home>}></Route>
//         <Route path='about' element={<About></About>}></Route>
//         <Route path='articles' element={<Articles></Articles>}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// };



// // 3. Авторизованный User может перейти в UserInfo, без авторизации - переадресует на HomePage
// const Profile = ({ isAuth }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuth) {
//       navigate('/')
//     }
//   }, [])

//   return isAuth && <div>
//     <p>User info:</p>
//     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sed et, placeat doloribus eum rem earum, quo perspiciatis ullam ipsa ab magnam quia natus eius, iste aliquid aliquam debitis sint.</p>
//   </div>
// };

// function App6() {
//   const [isAuth, setIsAuth] = useState(false);

//   return <BrowserRouter>

//     <Link to='/profile'>Link to profile</Link>
//     <button onClick={() => { setIsAuth(!isAuth) }}>{isAuth ? "we are auth" : 'we are not auth'}</button>

//     <Routes>
//       <Route path='/' element={<div>HomePage</div>}>  </Route>
//       <Route path='/profile' element={<Profile isAuth={isAuth} />}> </Route>
//       <Route path='/admin' element={<Profile isAuth={isAuth} />}> </Route>
//     </Routes>

//   </BrowserRouter>
// }





//4. Авторизация и роли
// ниже - не работает!!!


// const Profile = ({ isAuth }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuth) {
//       navigate('/')
//     }
//   }, [])

//   return isAuth && <div>
//     <p>User info:</p>
//     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sed et, placeat doloribus eum rem earum, quo perspiciatis ullam ipsa ab magnam quia natus eius, iste aliquid aliquam debitis sint.</p>
//   </div>

// };
// const PrivateRoute = ({ userRole, children }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (userRole !== "admin") {
//       navigate('/')
//     }
//   }, [])
//   return userRole === 'admin' ? children : null;
// }

// const PrivateUserRoute = ({ userRole, children }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (userRole !== "admin") {
//       navigate('/')
//     }
//   }, [])
//   return userRole === 'admin' ? children : null;
// }

// // const Profile = () => {
// //   return isAuth &&<div> UserInfo</div>
// // }

// const Admin = () => {
//   // return <div> AdminInfo</div>

//   const navigate = useNavigate();
//   const [isAuth, setIsAuth] = useState(false);
// //   useEffect(() => {
// //     if (userRole !== "admin") {
// //       navigate('/')
// //     }
// //   }, [])
// //   return userRole === 'admin' ? children : null;
// // }


// useEffect(() => {
//   if (!isAuth) {
//     navigate('/')
//   }
// }, [])
// }


// function App6() {
//   const [isAuth, setIsAuth] = useState(false);
//   const [userRole, setUserRole] = useState('guest');

//   return <BrowserRouter>

//     <Link to='/profile'> go to profile    </Link>
//     <button onClick={() => { setIsAuth(!isAuth) }}>{isAuth ? "we are auth" : 'we are not auth'}</button>

//     <Routes>
//       <Route path='/' element={<div>HomePage</div>}>  </Route>
//       <Route path='/profile' element={<Profile isAuth={isAuth} />}> </Route>
//       <Route path='/admin' element={<Profile isAuth={isAuth} />}> </Route>
//     </Routes>

//   </BrowserRouter>
// }

// выше - не работает!!!



// export default App6;





//5. Доп.
import { createContext, Context, useContext, } from "react";
// useState, useEffect
// import PropTypes from "prop-types";
import "./App.css";
import { useMatch, useParams, useSearchParams, useLocation, } from "react-router-dom";
// BrowserRouter, Route, Routes, useNavigate,


// const PageContainer = () => (
//   <>
//     HELLO
//     <Routes>
//       <Route index element={<div>index</div>}></Route>
//       <Route path="hello" element={<div>hello</div>}></Route>
//     </Routes>
//   </>
// );




const PageArticles = () => <div>Articles</div>;

const PageArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id === "100") {
      navigate("/articles");
    }
  }, [id]);

  const handleClick = () => {
    navigate(`/articles/${+ id + 1}`);
  };
  const handleClickPrev = () => {
    navigate(`/articles/${+ id - 1}`);
  };

  if (id === "100") {
    return <></>;
  }

  return (
    <div>
      Article {id}
      <br></br>
      <button onClick={handleClick}>Go next article</button>
      <button onClick={handleClickPrev}>Go prev article</button>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="articles" element={<PageArticles></PageArticles>}></Route>
        <Route
          path="articles/:id"
          element={<PageArticle></PageArticle>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;