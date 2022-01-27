import {
    useEffect,
    useState
} from "react";


const useFindCoordinates = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const addDiv = document.createElement("div");
        addDiv.innerText = text;
        document.body.append(addDiv);
    }, [text]);

    return { setText };
};


export default useFindCoordinates;