import { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import RouterApp from "./Routes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouterApp/>
    </div>
  )
}

export default App
