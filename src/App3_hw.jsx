import './App.css';
import React from "react";
// import useFindCoordinates from './3/useFindCoordinates.jsx';
import FindCoordinatesClassComponent from './3/FindCoordinatesClassComponent.jsx'
import ClassComponentLifeStyle from './3/ClassComponentLifeStyle.jsx'


function App3_hw() {

    // const { setText } = useFindCoordinates();
    // const handleMouseMove = (event) => {
    //     setText(event.value = event.clientX + ':' + event.clientY)
    // };

    return (
        <div className="App">
            {/* <textarea onMouseMove={handleMouseMove} type="text" rows="30" cols="50"/> 
            <hr />*/}
            <FindCoordinatesClassComponent></FindCoordinatesClassComponent>
            <hr />
            {/* <ClassComponentLifeStyle></ClassComponentLifeStyle> */}

        </div>
    );
};


export default App3_hw;