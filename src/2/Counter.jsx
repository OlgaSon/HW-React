import { useState } from "react";
import { memo } from "react";


/* // Функциональные компоненты
const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter +1);
    }

    const handleClickDecr = () => {
        setCounter(counter -1);
    }

    return <div>
        <h1>Counter {counter}</h1>
        <button onClick={handleClick}>increment</button>
        <button onClick={handleClickDecr}>decrement</button>
        
    </div>;
} */

/* // 1 вариант:
const Counter = (props) => {
    const [counter1, setCounter] = useState(0);
    const handleClickPlus1 = () => {
        setCounter(counter1 +1);
    }

    const [counter2, setCounter2] = useState(0);
    const handleClickPlus2 = () => {
        setCounter2(counter2 +2);
    }

    const [counter3, setCounter3] = useState(0);
    const handleClickPlus3 = () => {
        setCounter3(counter3 +3);
    }

    let sum=0;
    sum = counter1 + counter2 + counter3;

    return <div>
             <button onClick={handleClickPlus1}>increment+1</button>
             <button onClick={handleClickPlus2}>increment+2</button>
             <button onClick={handleClickPlus3}>increment+3</button>
             <span>Sum: {sum}</span>
        </div>
} */

/* // 2 вариант, есть ошибка(см.коммент) 
const Counter = (props) => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    const handleClickPlus = (value, counter, setCounter) => {
        setCounter (counter+value)
        //Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
        // The above error occurred in the <Counter> component:
        // const [counter1, setCounter1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)  *!!!*  (0);
    }

    return (<>
             <button onClick={handleClickPlus(1, counter1, setCounter1)}>increment+1</button>
             <button onClick={handleClickPlus(2, counter2, setCounter2)}>increment+2</button>
             <button onClick={handleClickPlus(3, counter3, setCounter3)}>increment+3</button>
             <span>Sum = {counter1 + counter2 + counter3}</span>
        </>)
};  */


/* export default Counter;  */



/* const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }
    // console.log('counter component');
    return (<>
        <button onClick={handleClick}>increment + 1</button>
        {counter}
        <br></br>
        app counter {props.appCounter}
    </>
    );
}

export default memo(Counter, (prevProps, nextProps) => {
    return nextProps.appCounter % 5;
}); */



// Задание 2.
// Вынести useState из компонента Counter в App.

const Counter = ({ counter, setCounter }) => {

    const handleClick = () => {
        setCounter(counter + 1);
    };
    
    return (<>
        <button onClick={handleClick}>increment + 1</button>
        {counter}
        <br></br>
        {/* app counter {props.appCounter}  */}
    </>
    );
};

export default memo(Counter, (prevProps, nextProps) => {
    return nextProps.appCounter % 5;
});