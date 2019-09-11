import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        const val = window.localStorage.setItem(key, JSON.stringify(val));
        setStoredValue(value);

    }
    return [storedValue, setValue];
};

