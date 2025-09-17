import { useState } from 'react'
import './App.css'

function App() {
  const [colors, setColors] = useState<string[]>([]);
  const [color, setColor] = useState<string>("");

  function setTask(){
    setColors([...colors, color]);
  }

  return (
    <>
      <h2>Color picker</h2>
      <div>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
        <button onClick={() => setTask()}>Add color</button>
      </div>
      <div className='colors-list'>
        {colors.map((color, index) => 
          <div className='color-element' key={index}>
            <p>{color}</p>
            <div className='color-background' style={{backgroundColor: color}}></div>
          </div>
        )}
      </div>

    </>
  )
}

export default App
