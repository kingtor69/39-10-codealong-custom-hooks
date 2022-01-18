import React, {useState, useEffect} from 'react';

const useLocalStorageState = (key, value) => {
    const [state, setState] = useState(() => {
        const returnValue = window.localStorage.getItem(key) || value;
        return (
            typeof(value) !== 'string' 
            ? JSON.parse(returnValue) : returnValue
        )
    });
    
    useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [key, state]);

    return [state, setState];
};

export default useLocalStorageState;
