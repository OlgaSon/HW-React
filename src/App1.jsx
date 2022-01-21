import './App.css';
import React from "react";
import MyFirstComponent from "./1/MyFirstComponent";
import UserList from "./1/UserList";
import ComposableUserList from "./1/ComposableUserList";


function App1() {
  return (
    <div className="App1">

      <MyFirstComponent /><hr />
      <UserList></UserList><hr />
      <ComposableUserList></ComposableUserList><hr />

    </div>
  );
}


export default App1;