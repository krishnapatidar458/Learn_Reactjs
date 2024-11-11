import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(1)

  const count = () => {
    setCounter(counter + 1)
  }
  
  const recount = () => {
    if(counter > 0)
      setCounter(counter - 1)
  }

  return(
    <>
      <h1>First React project :- {counter}</h1>

      <button onClick={count}>
        Add count
      </button>
      <br/>
      <button onClick={recount}>
        Remove count
      </button>
    </>
  )
}

export default App
