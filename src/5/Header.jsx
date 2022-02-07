import { useContext } from 'react';
import { AccordionContext } from './Accordion';


const Header = ({ children }) => {
    const { isOpen, setIsOpen } = useContext(AccordionContext);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    
    return <div className='title' onClick={handleClick}>{children}</div>; 
};


export default Header;