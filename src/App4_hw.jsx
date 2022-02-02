import './App.css';
// import React, { useEffect, createRef, useRef, useState, Fragment, createContext, useContext } from "react";
import Figure from './4/Figure.jsx'
import Accordion from './4/Accordion.jsx'
import accordionData from './4/accordionData';


function App4() {

  return (
    <div className="App">

      <Figure ></Figure>

      <section className='card'>
        <h3>Accordion component</h3>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </section>


    </div>
  );
};


export default App4;