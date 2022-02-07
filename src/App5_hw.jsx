import './App.css';
import Accordion from './5/Accordion.jsx'
import accordionData from './5/accordionData';


function App5_hw() {

    return (
        <div className="App">
            {accordionData.map(({ header, content }) =>
                <Accordion>
                    <Accordion.Header>{header}</Accordion.Header>
                    <Accordion.Content>{content}</Accordion.Content>
                </Accordion>
            )}
        </div>
    );
};


export default App5_hw;