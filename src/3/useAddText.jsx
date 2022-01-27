import {
    useEffect,
    useState
} from "react";


const useAddText = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        if (!text) { return }
        const addDiv = document.createElement("div");
        addDiv.innerText = text;
        document.body.append(addDiv);
    }, [text]);

    return { setText }
}


export default useAddText;