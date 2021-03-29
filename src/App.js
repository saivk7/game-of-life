
import './App.css';

import React, { useEffect } from 'react';
import Board from './components/BoardComp';
import Title from './components/Title';
import Controller from './components/Controls';
import {useState} from 'react';
import Tile from './components/Tile';

var game = require('./components/game');
const sampleBoard = game.createBoard();

function App() {

  const [currentBoard,setBoard] = useState(sampleBoard);
  const [change,setChange]  = useState(0);

  
  const clickChanger=(e)=> {
    // pass key, get row and column coords
    // update that index to alive or dead
    // according to current state of cell
    let id = e.target.id;
    let el = document.getElementById(id);
    let color = window.getComputedStyle(el).getPropertyValue('background');
    
    console.log("id is :" + id + " element id el: " + el + " color: " + color);

    let row = Math.floor(id/50);
    let col = id % 50;
    currentBoard[row][col] = 1;
    setBoard(currentBoard);
    setChange(change+1);
    console.log(change)
    
  }
  useEffect(()=>{
    console.log("render");
  },[currentBoard,change])

  const black = { background: 'black' };
  const green = { background: '#66ff33' };

  const nextBoard=() =>{
    var board = currentBoard;
    var neighbors = [];
    neighbors.push(0);
    neighbors.push(-1);
    neighbors.push(1);
    var copyBoard = [];
    var rows = board.length;
    var cols =board[0].length;
    for(var i=0;i<board.length;i++){//copy in the board
      copyBoard[i] = [];
      for(var j=0;j<board[i].length;j++){
        copyBoard[i][j] = board[i][j];
      }
    }
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {

          // For each cell count the number of live neighbors.
          var liveNeighbors = 0;

          for (var i = 0; i < 3; i++) {
              for (var j = 0; j < 3; j++) {

                  if (!(neighbors[i] == 0 && neighbors[j] == 0)) {
                      var r = (row + neighbors[i]);
                      var c = (col + neighbors[j]);

                      // Check the validity of the neighboring cell.
                      // and whether it was originally a live cell.
                      // The evaluation is done against the copy, since that is never updated.
                      if ((r < rows && r >= 0) && (c < cols && c >= 0) && (copyBoard[r][c] == 1)) {
                          liveNeighbors += 1;
                      }
                  }
              }
          }

          // Rule 1 or Rule 3
          if ((copyBoard[row][col] == 1) && (liveNeighbors < 2 || liveNeighbors > 3)) {
              board[row][col] = 0;
          }
          // Rule 4
          if (copyBoard[row][col] == 0 && liveNeighbors == 3) {
              board[row][col] = 1;
          }
      }
  }
  setBoard(copyBoard);
  setChange(change+1);
  }
  
  //console.log("2d arr is " , currentBoard);

  const arr = game.oneDimensional(currentBoard);
  //console.log("1d array is " , arr);
  const board = arr.map((tile,i)=>{
    console.log("reforming board");
      if(tile<0.5){
          return(
              <Tile style={black} id={i} key={i} tileClick = {clickChanger} />
          );   
      }else{
          return(
              <Tile style={green} id={i} key={i} tileClick = {clickChanger}/>
          );
      }
      
  });
  return (
    <div className="App">
      <Title />  
      <Board board={board} />
      <Controller nextBoard={nextBoard} />
    </div>
  );
}

export default App;
