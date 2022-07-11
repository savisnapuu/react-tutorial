import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is Children paragraph</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonderwoman">
        <buton>Action2</buton>
      </Greet>
    </div>
  );
}

export default App;
