import React from 'react'
import './App.css'
import Form from './components/Form'
import Board from './components/Pokemon'
const App: React.FC = () => {
  return (
    <div className="App">
      <Form />
      <Board />
    </div>
  )
}

export default App
