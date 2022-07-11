import logo from './logo.svg'
import './App.css'
import { render } from '@testing-library/react'
import Greet from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComonent from './components/ParentComponent'

function App() {
  return (
    <div className="App">
      <ParentComonent />
    </div>
  )
}

export default App
