import { useContext } from 'react';
import { AccordionContext } from './Accordion.jsx';


const Content = ({ children }) => {
    const { isOpen } = useContext(AccordionContext);
    
    return ((isOpen) && <div className='text'> {children}</div>);
};


export default Content;