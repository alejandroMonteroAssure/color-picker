import React, { useState } from 'react'
import './App.css'

function App() {
  const [colors, setColors] = useState<string[]>([]);
  const [color, setColor] = useState<string>("");

  function setTask(){
    setColors([...colors, color]);
  }

  function changeColor(color: string){
    document.body.style.backgroundColor = color;
  }

  return (
    <>
      <div className='head'>
        <header>
          <h1>Color picker</h1>
        </header>
        <div className='add-color-section'>
          <input 
            type="text" 
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") setTask(); }}
          />
          <button 
            onClick={() => setTask()}
          >
            Add color
          </button>
        </div>
      </div>
      <div className='colors-list'>
        {colors.map((color, index) => 
          <div className='color-element' key={index}>
            <button 
              className='color-btn' 
              style={{ "--bg": color} as React.CSSProperties}  
              onClick={() => changeColor(color)}>
              </button>
            <p>{color}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
