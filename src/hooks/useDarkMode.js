import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

function useDarkMode() {

    const [nighttime, setNighttime ] = useLocalStorage(darkmode);

    useEffect(() {
        const body = window.document.body;

        if (darkmode) {
            body.classList.add('dark-mode');
        }
        else {
            body.classList.remove('dark-mode');
        }

    }, [nighttime]);

    return (
        <div></div>
    )
}

export default useDarkMode