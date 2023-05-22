import Main  from './components/Main'
import Nav from './components/Nav';
import './App.css'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <div>
      <Nav darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      <Main darkMode = {darkMode}/>
    </div>
)
}

export default App
