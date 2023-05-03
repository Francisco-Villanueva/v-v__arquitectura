import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </div>
    
  )
}

export default App
