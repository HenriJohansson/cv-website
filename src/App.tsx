import { useState } from 'react'
import PaperCv from './components/Cards/PaperCv'
import './App.css'

function App() {
  const [show, toggleShow] = useState(false)
  return (
    <>
      <h1>My CV Website</h1>
      <div className="card">
        <button onClick={() => toggleShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && <PaperCv />}
      <p className="about">
        This is the basic main page. 
      </p>
    </>
  )
}

export default App
