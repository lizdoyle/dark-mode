import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

function useDarkMode() {

    const darkmode = true;

    const [nighttime, setNighttime ] = useLocalStorage(darkmode);

    useEffect(() => {
        

        if (darkmode) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }

    }, [darkmode]);


    return [nighttime, setNighttime]
}

export default useDarkMode