import { useState } from "react";
import './Accordion.css';


const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <h2 className='title' onClick={handleClick}>{title}</h2>
            {(isOpen) && <div className='text'>{content}</div>}
        </div>
    )
};


export default Accordion;