import logo from './logo-white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo}
          height={75}
          alt="logo" />
        <a
          className="App-link"
          href="https://goodcoder.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GO TO WEBSITE
        </a>
      </header>
    </div>
  );
}

export default App;
