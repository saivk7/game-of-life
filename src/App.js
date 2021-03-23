
import './App.css';

import React from 'react';
import Board from './components/BoardComp';
import Title from './components/Title';
import Controller from './components/Controls';
import {useState} from 'react';
import Tile from './components/Tile';

var game = require('./components/game');
const sampleBoard = game.createBoard();

function App() {

  const black = { background: 'black' };
  const green = { background: '#66ff33' };

  const [currentBoard,setBoard] = useState(sampleBoard);
  //console.log("2d arr is " , currentBoard);

  const arr = game.oneDimensional(currentBoard);
  //console.log("1d array is " , arr);
  const board = arr.map((tile,i)=>{

      if(tile<0.5){
          return(
              <Tile style={black} id={i} key={i} />
          );   
      }else{
          return(
              <Tile style={green} id={i} key={i} />
          );
      }
      
  });
  return (
    <div className="App">
      
      <Title />  
      <Board board={board} />
      <Controller />
    </div>
  );
}

export default App;
