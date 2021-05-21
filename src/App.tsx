import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import { useState, useEffect } from 'react';

function App() {

  let [suggestions, setSuggestions] = useState(['one', 'two']);
  
  const onSearchText = (text: string) => {
    console.log('onSearchText ', text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SearchForm onSubmit={onSearchText} />
        <ResultList results={suggestions} />
      </header>

    </div>
  );
}

export default App;
