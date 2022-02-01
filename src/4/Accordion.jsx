import { useState } from "react";
import './Accordion.css';


const Accordion = ({ title, text }) => {
    const [className, setClassName] = useState('display-none');

    const handleClick = () => {
        setClassName(className === 'text' ? 'display-none' : 'text');
    };

    return (
        <div>
            <h2 className='title' onClick={handleClick}>{title}</h2>
            {(className === 'text') && <div className={className}>{text}</div>}
        </div>
    )
};


export default Accordion;