import { createContext, useState } from 'react'
import './App.css'
import Card1 from './Card1'
export const UserContext = createContext();

function App() {

  const [state, setState] = useState(" ")

  return (
  <UserContext.Provider value={[state, setState]}>
    <Card1/>
  </UserContext.Provider>

  )
}

export default App
