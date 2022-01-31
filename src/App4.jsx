import './App.css';
import React, { useEffect, createRef, useRef, useState, Fragment, createContext, useContext } from "react";
// import useDocumentTitle from './3/useDocumentTitle.jsx'
// import useAddText from './3/useAddText.jsx'


// Ref в классовом коммпоненте
class TestComponent extends React.Component {
  refDiv = createRef();

  componentDidMount(){
    console.log(this.refDiv);
    console.log(this.refDiv.current);
  };

  render(){
    return <div ref={this.refDiv}></div>
  };

};


// Ref в функциональном коммпоненте
const TestFuncComponent = () => {
  const refDiv = useRef();

  useEffect(()=>{
    console.log(refDiv);
  }, []);

  return <div ref={refDiv}></div>

};



/* // Ref current.focus() class
class TestComponentFocus extends React.Component {
  refTextarea = createRef();

  componentDidMount() {
    this.refTextarea.current.focus();
  };

  render() {
    return <textarea ref={this.refTextarea}></textarea>
  };

}; */


/* 
// Ref current.focus() func
// setValue onChange в textarea
const TextareaFocus = () => {
  const [value, setValue] = useState();
  const refTextarea = useRef('');

  useEffect(() => {
    refTextarea.current.focus();
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <textarea value={value} ref={refTextarea} onChange={handleChange}></textarea>
  );
};
*/
function App4() {

  return (
    <div className="App">
      <TestComponent></TestComponent>
      <TestFuncComponent></TestFuncComponent>
      {/* <TestComponentFocus></TestComponentFocus> */}
      {/* <TextareaFocus></TextareaFocus> */}

    </div>
  );
};



/* 
function App4() {
  const [arrInputs, setArrInputs] = useState([
    { type: 'input', value: 'input' },
    { type: 'textarea', value: 'textarea' }]);

  return (
    <div className="App">
      {arrInputs.map(item => <Fragment key={item.value}>
        {item.type === 'textarea' && <textarea value={item.value}></textarea>}
        {item.type === 'input' && <input value={item.value}></input>}
      </Fragment>)}
    </div>
  );
}; */

// Добавить кнопку, которая добавляет ипут/текстареа и кнопку, которая удаляет последний добавленный элемент.
/* function App4() {
  const [arrInputs, setArrInputs] = useState([
    { type: 'input', value: 'input' },
    { type: 'textarea', value: 'textarea' }]);

  const handleAdd = () => {
    setArrInputs([...arrInputs, { type: 'input', value: 'input' }])
  }

  const handleRemoveLast = () => {
    setArrInputs(arrInputs.slice(0, arrInputs.length - 1))
  }

  return (
    <div className="App">
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemoveLast}>RemoveLast</button>
      <br />
      {arrInputs.map(item => <Fragment key={item.value}>
        <p>
          {item.type === 'textarea' && <input value={item.value}></input>}
          {item.type === 'input' && <input value={item.value}></input>}</p>
      </Fragment>)}
    </div >
  );
}; */



//КОНТЕКСТ.
/* let CounterContext = createContext();

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  const handleClick = () => {
    setCounter(counter + 1)
  };

  return (
    <div>
      Component Counter
      <br />
      <button onClick={handleClick}>increment</button>
      {counter}
    </div>
  );
};

const Main = () => {
  return <div>
    <Counter></Counter>

  </div>
};

function App4() {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <div className='App'>
        <Main></Main>
      </div>
    </CounterContext.Provider >
  );
}
 */

/* //Контекст. 2 вариант: через Consumer. Нужен для классов.
let CounterContext = createContext();

const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  const handleClick = () => {
    setCounter(counter + 1);
  }
  return <CounterContext.Consumer>
    {({ counter, setCounter }) => <div>
      Component Counter
      <br />
      <button type="button" onClick={() => {
        setCounter(counter + 1);
      }}>increment</button>
      {counter}
    </div>}
  </CounterContext.Consumer>;
}

const Main = () => {
  return <div>
    <Counter></Counter>
  </div>
};

function App4() {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <div className='App'>
        <Main></Main>
      </div>
    </CounterContext.Provider >
  );
} */


/* 
// Создать компонент Header, который будет содержать в себе компонент LangSelect - в котором 
// будет возможность выбрать один из трех языков.
// Вывести компонент Content - в котором будет указан выбранный ранее язык.

let LangSelectContext = createContext();

const LangSelect = () => {
  const { langSelect, setLangSelect } = useContext(LangSelectContext);

  const handleClick = (event) => {
    setLangSelect(event.target.value)
  };

  return (
    <div>
      <p><input name='Lang' type="radio" value='en' onChange={handleClick} />En</p>
      <p><input name='Lang' type="radio" value='ru' onChange={handleClick} />Ru</p>
      <p><input name='Lang' type="radio" value='by' onChange={handleClick} />By</p>
    </div>
  );
};

const Content = () => {
  const { langSelect } = useContext(LangSelectContext);
  return (<div>{langSelect}</div>)
};

const Header = () => {
  return <div> <LangSelect></LangSelect>  </div>
};

function App4() {
  const [langSelect, setLangSelect] = useState('');

  return (
    <LangSelectContext.Provider value={{ langSelect, setLangSelect }}>
      <div className='App'>
        <Header></Header>
        <Content></Content>
      </div>
    </LangSelectContext.Provider >
  );
};
 */

export default App4;