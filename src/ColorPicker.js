import React from 'react';
import useLocalStorageState from './hooks/useLocalStorageState';

const ColorPicker = () => {
  const [color, setColor] = useLocalStorageState('color', 'purple');

  const changeColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <>
      <h2 style={{ color }}>Your Color is {color}. Dig?</h2>
      <label htmlFor="color-selector" style={{color}}>change color: </label>
      <select style={{color}} id="color-selector" value={color} onChange={changeColor}>
        <option value="purple">purple</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="orange">orange</option>
        <option value="black">black</option>
      </select>
    </>
  )
}

export default ColorPicker;
