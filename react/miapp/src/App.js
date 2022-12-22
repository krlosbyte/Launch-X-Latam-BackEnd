import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>La hora es:</h1>
      <h2>Son las {new Date().toLocaleTimeString()}</h2>
      </header>
    </div>
  );
}

export default App;
