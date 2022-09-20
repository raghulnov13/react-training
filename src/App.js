import logo from './logo.svg';
import './App.css';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Main />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Raghul <strong>React</strong> Tutorial.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      
    </div>
  );
}

export default App;
