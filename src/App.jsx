import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextBox from './components/Textbox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <TextBox/>
  )
}

export default App
