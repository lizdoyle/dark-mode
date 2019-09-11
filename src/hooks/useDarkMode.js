import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

export const useDarkMode = () => {

    const darkmode = true;

    const [nighttime, setNighttime ] = useLocalStorage(nighttime);

    useEffect(() => {
        
            document.body.classList.toggle('dark-mode');
        

    }, [nighttime]);


    return [nighttime, setNighttime]
}

