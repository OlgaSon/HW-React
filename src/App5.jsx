import './App.css';
import React, { useEffect, createRef, useRef, useState, Fragment, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import Modal from './5/Modal.jsx'
import Counter from './5/Counter.jsx'
import { withCounterState } from './5/withCounterState'
import './5/Modal.css';
import Template from './5/Template'


const CounterWithState = withCounterState(Counter);

// createPortal(<Modal></Modal>)
function App5() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <>
    //   <button onClick={handleClick}>toggle Modal</button>
    //   <div className="App">
    //   // {createPortal(<div>Notification</div>, document.getElementById('notification'))}

    //     {isOpen && createPortal(<Modal></Modal>, document.getElementById('modal'))}
    //   </div>
    // </>

    // <div className="App">
    //   <Modal id={10} title={'25'} content={"asd"}>{<div>Content</div>}</Modal>

    //   <CounterWithState></CounterWithState>

    //   <Counter render={() => <div renderProp></div>}></Counter>
    //   // не работает с render

    // </div>

    <>
    <Template>
      <Template.Header></Template.Header>
      <Template.Sidebar></Template.Sidebar>
      <Template.Content></Template.Content>
    </Template>
    //не работает 
    </>

    // <>
    // <Template.Menu>{[1,2,3].map(item=> <Template.Menu.Item></Template.Menu.Item>)}</Template.Menu>
    // </>

  );


};


export default App5;