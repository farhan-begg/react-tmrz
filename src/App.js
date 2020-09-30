import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';



const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TMRZ</h1>
      </div>
    </Provider>
  );
}

export default App;
