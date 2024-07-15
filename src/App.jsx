import { useState } from 'react'
import './App.css'
import Card1 from './Card1'

function App() {

  const [state, setState] = useState(" ")

  return (
    <>
    <Card1 state={state} setState={setState}/>
    </>
  )
}

export default App
