import { useEffect, useRef } from "react";
import './Figure.css';


const Figure = () => {
    const refDiv = useRef();
    let timerID;
    let isDown;

    const insertFigure = (top, left) => {

        refDiv.current.innerHTML = `<div>Figure Component</div>`;
        let divFigure = refDiv.current.childNodes[0];

        divFigure.className = "divFigure";
        let docHeight = window.innerHeight;
        let docWidth = window.innerWidth;
        let divFigureHeight = divFigure.offsetHeight;
        let divFigureWidth = divFigure.offsetWidth;
        let heightMax = docHeight - divFigureHeight;
        let widthMax = docWidth - divFigureWidth;
        divFigure.style.position = "absolute";

        divFigure.style.marginTop =
            top ? (top - divFigureHeight / 2 + "px") : (Math.floor(Math.random() * heightMax) + "px");
        divFigure.style.marginLeft =
            left ? (left - divFigureWidth / 2 + "px") : (Math.floor(Math.random() * widthMax) + "px");
    };

    useEffect(() => {
        insertFigure();
    }, []);

    const handleMouseOver = () => {
        if (!isDown) {
            timerID = setTimeout(() => {
                insertFigure()
            }, 300);
        };
    };

    const handleMouseDown = () => {
        clearTimeout(timerID);
        isDown = true;
    };

    const handleMouseOut = (event) => {
        if (isDown) {
            insertFigure(event.clientY, event.clientX);
        };
    };

    const handleMouseUp = () => {
        isDown = false;
    };

    return <div
        onMouseOver={handleMouseOver}
        onMouseDown={handleMouseDown}
        onMouseOut={handleMouseOut}
        onMouseUp={handleMouseUp}
        ref={refDiv}>
    </div>
};


export default Figure;


/* Создать компонент, который будет представлять на UI геометрическую фигуру, 
которая появляется в случайном месте видимой клиентской части. 
При каждом наведении на эту фигуру, она появляется в другом случайном месте. 
** Добавить возможность перетягивания этой фигуры на другие координаты. 
После того как вы навели на элемент и прошло 300 мс - то он появляется в другом случайном месте, 
но если вы успели нажать на него в течении 300 мс и начали перетягивать - 
то фигура должна перемещаться за курсором, пока вы её не отпустите. */