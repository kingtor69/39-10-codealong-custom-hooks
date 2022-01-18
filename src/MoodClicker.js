import React from 'react';
import useToggleState from './hooks/useToggleState';
import './MoodClicker.css';

const MoodClicker = () => {
  const [isHappy, toggleIsHappy] = useToggleState(false);
  const [isDarkMode, toggleIsDarkMode] = useToggleState();

  return (
    <div className={isDarkMode ? 'MoodClicker-dark' : 'MoodClicker-light'}>
      <h2>is everybody <br />happy?</h2>
      <h3>
        {isHappy ? 'yes, we are' : 'no, we are not'}
      </h3>
      <button onClick={toggleIsHappy}>
        or are we?
      </button>
      <button onClick={toggleIsDarkMode}>
        toggle dark/light mode
      </button>
    </div>
  )
}

export default MoodClicker;
