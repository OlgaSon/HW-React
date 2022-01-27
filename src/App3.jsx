import './App.css';
import React, { useState, useEffect } from "react";
import useDocumentTitle from './3/useDocumentTitle.jsx'
import useAddText from './3/useAddText.jsx'


function App3() {

/*   const { color, counter, setColor, setCounter } = useDocumentTitle();

  const handleClickCounter = () => {
    setCounter(counter + 1);
  };

  const handleClickColor = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  };

  
  const handleChange = (event) => {
    console.log(event.target.value);
  };



  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log('App inserted in DOM');
  //   return () => {
  //     // функция отписки, например, обратная от addEvLi на scroll
  //   }
  // }, []);

  // useEffect(() => {

  // }, [counter]);
  // // аналогично componentDidUpdate в классовом компоненте, но только на то, что хотим отслеживать
  // // если любая из зависимостей в [] поменяется, сработает функция выше.



  return (
    <div className="App">
      <button onClick={handleClickCounter}>increase counter</button>
      <button onClick={handleClickColor}>toggle color</button>
      <hr />
      <input onChange={handleChange} type="text" />
      <hr />


    </div>
  );
 */


  const { setText } = useAddText();

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { setText(event.target.value) }
  }

  return (
    <div className="App">
      <input onKeyDown={handleKeyDown} type="text" />
    </div>
  );
};


export default App3;