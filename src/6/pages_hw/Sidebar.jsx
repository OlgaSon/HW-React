import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom'


const Sidebar = () => {
    return (
        <ul className='sidebar'>
            <li><Link to='/'>Home </Link></li>
            <li><Link to='contacts'>Contacts </Link></li>
            <li><Link to='reviews '>Reviews </Link></li>
            {/* <Outlet></Outlet> */}
        </ul>
    )
};


export default Sidebar;