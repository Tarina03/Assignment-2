

import { useState } from 'react';
import './App.css';

export default function App() {
  const colorList = [
    '#FF6B6B', 
    '#6BCB77', 
    '#4D96FF', 
    '#FFD93D', 
    '#C77DFF'
  ];
  
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % colorList.length);
  }

  const currentColor = colorList[index];

  return (
    <div className="container" style={{ backgroundColor: currentColor }}>
      <button className="color-button" onClick={handleClick}>
        Change Color
      </button>
    </div>
  );
}
