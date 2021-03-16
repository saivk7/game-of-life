
import './App.css';

import React from 'react';
import Board from './components/BoardComp';
import Title from './components/Title';

function App() {

  return (
    <div className="App">
      
      <Title />  
      <Board />
      {/*<Controller />*/}
    </div>
  );
}

export default App;
