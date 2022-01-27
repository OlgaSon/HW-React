import {
    useEffect,
    useState
} from "react";


const useDocumentTitle = () => {
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState('red');

    useEffect(() => {
        document.title = `Вы нажали  ${counter} раз. Цвет - ${color}`;
    }, [color, counter]);

    return {
        counter,
        color,
        setCounter,
        setColor
    }
};


export default useDocumentTitle;