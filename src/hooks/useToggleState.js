// create a state, starting true of falkse
// toggle that state (state => !state)

import {useState} from 'react';

const useToggleState = (initialState=true) => {
    const [state, setState] = useState(initialState)
    const toggleState = () => {
        setState(state => !state)
    }
    return [state, toggleState]
};

export default useToggleState;
