import React from 'react';
import {useState} from 'react';

import Tile from './Tile';
var game = require('./game');



const sampleBoard = game.createBoard();

const Board = ()=>{


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




    return(
        <div className="mainBoard">
            <div className="board" >
                {/*console.log(TileCount, "from board")*/}
                {board}
                
            </div>
        </div>

    );
}


export default Board;