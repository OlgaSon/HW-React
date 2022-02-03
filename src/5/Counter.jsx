import {useState} from 'react'


const CounterContainer = () => {
    const [counter, setCounter] = useState(0);
    return <Counter counter={counter} setCounter={setCounter}></Counter>
}

const Counter = ({counter, setCounter}) => {

    const handleClick = () => {
        setCounter(counter+1);
    }
    return (<>
    <button onClick={handleClick}>increment</button>
    {counter}
    </>);
}


export default Counter