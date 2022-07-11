import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Message />
      <Greet name="Bruce" heroName="Batman">
        <p>This is Children paragraph</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonderwoman">
        <button>Action2</button>
      </Greet>
    </div>
  );
}

export default App;
