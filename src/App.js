
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
    if(currentBoard[row][col]<0.2){ //refer game logic 
      currentBoard[row][col] = 1;
    }else{
      currentBoard[row][col] = 0;
    }
    
    setBoard(currentBoard);

    setChange(change+1);

    console.log("click change" ,change)
    
  }
  useEffect(()=>{

    console.log("render");
  },[change])

  const black = { background: 'black' };
  const green = { background: '#66ff33' };

  async function nextBoard(){
   const nextArry =  await game.getNextBoard(currentBoard);
   setBoard(nextArry);
   setChange(change+1);
  }
  
  
  //console.log("2d arr is " , currentBoard);

  const arr = game.oneDimensional(currentBoard);
  //console.log("1d array is " , arr);
  const board = arr.map((tile,i)=>{
    //console.log("reforming board");
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
