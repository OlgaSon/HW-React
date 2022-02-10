import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom'


const Contacts = () => {
    return (
        < div className="contacts" >
            <h3>There is a Contacts section</h3>
            <p>Adress: 123456, Ipsum, 17-37</p>
            <p>Tel: 12 345 67890</p>
            <p>Email: voluptatem@dolor.com</p>
        </div>
    )
};


export default Contacts