import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'not-a-secret';

// Create a new component. This component should produce HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this compnent's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
