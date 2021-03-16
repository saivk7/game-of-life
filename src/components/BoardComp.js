import React from 'react';
import {useState} from 'react';

import Tile from './Tile';

const createBoard = () =>{
    var retBoard = [];
    for(var i=0;i<30;i++){
        retBoard[i]= [];
        for(var j=0; j<50;j++){
            retBoard[i].push(j);
        }
    }
    return retBoard;
}

const oneDimensional = (arr) =>{
    var retArr = [];
    //console.log("passed array is ", arr);
    for(var i=0;i<arr.length; i++){
        //console.log(arr[i]);
        retArr = retArr.concat(arr[i]);
        //console.log("ret arra" ,retArr);
    }
    return retArr;
}
const sampleBoard = createBoard();



const Board = ()=>{
    const [currentBoard,setBoard] = useState(sampleBoard);
    console.log("2d arr is " , currentBoard);

    const arr = oneDimensional(currentBoard);
    console.log("1d array is " , arr);
    const board = arr.map((tile,i)=>{
        return(
            <Tile id={i} key={i} />
        );
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