import { createContext, useState } from "react";
import './Accordion.css';
import Header from './Header'
import Content from './Content'


export const AccordionContext = createContext();

const Accordion = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
        <section className='card'>{children}</section>
    </AccordionContext.Provider>;
};

Accordion.Header = Header;
Accordion.Content = Content;


export default Accordion;