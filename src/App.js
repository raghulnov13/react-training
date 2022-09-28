// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
// import About from './components/About/About';
import Wrapper from './components/Wrapper/Wrap'
import Mobile from './components/Mobiles/Mobile';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper />
      <Mobile />
      {/* <header className="App-header">
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

      </header> */}

    </div>
  );
}

export default App;
