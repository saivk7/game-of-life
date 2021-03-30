/*
List of funcitons available
1.createBoard: Creates a 2D board 
2.oneDimensional: converts a passed in 2 dimensional array to 1 dimension


*/

//for creating a board

const createBoard = () =>{
    var retBoard = [];
    for(var i=0;i<30;i++){
        retBoard[i]= [];
        for(var j=0; j<50;j++){
            var random = Math.random()-0.3; //prevents too many green cells
            //any chnages to 0.3 will effect the click funciton so change it there too.
            retBoard[i].push(random);
        }
    }
    console.log("the retBoard is ", retBoard);
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




const tileClick = (e) =>{
    /* console.log("some one clicked a tile");
    console.log(e.target.style);
    var id = e.target.id; */
    

}

function getNextBoard(_board) {
    let theNextBoard = [];
    _board.forEach((row, rowIndex) => {
      theNextBoard.push([]); // creates 30 new empty rows
      row.forEach((cell, cellIndex) => {
        // send the index of each row, and for each row, 
        // the index of each cell to countCellBuddies 
        // function, then check that cell's buddies to
        // make the decisions below.
        let buddies = countCellBuddies(rowIndex, cellIndex, _board);
        let life = 1,
            death = 0,
            fate;
        // Conway's Rules:
        if (cell >= 0.5) { // Cell is 'alive':
          // Any live cell with two or three live neighbours lives on.
          // Any live cell with fewer than two live neighbours dies.
          // Any live cell with more than three live neighbours dies.
          fate = buddies >= 2 && buddies <= 3 ? life : death;
        } else { // Cell is 'dead':
          // Any dead cell with exactly three live neighbours  
          // becomes a live cell.
          fate = buddies === 3 ? life : death;
        }
        // pushes 50 live or dead cells onto each new row
        theNextBoard[rowIndex].push(fate); 
      });
    });
    // updated 50 x 30 board:
    console.log(theNextBoard, "nextboard is ")
    return theNextBoard; 
  }


  function countCellBuddies(_rowIndex, _cellIndex, _board){
    
    // cellIsOccupied accepts a set of 'coordinates', if you will, where
    // the x-coord is the index of a given 'row' on the multi-dim board 
    // array, and the y-coord is the index of each 'cell' that is a part of 
    // that row. This can be looked at as a sort of reverse/upsidedown 
    // graph, becuase the cell represented by coords [0, 0] is the
    // top-most left-most cell, rather than a typical graph where 
    // [0, 0] would be bottom left.

    // That said, when checking the very first cell's buddies, 
    // cellIsOccupied() will be passed -1, -1 (to check 
    // for buddy up one and to the left), since the position 
    // of that cell is at the zeroeth index of the array that is 
    // at the zeroeth index of the parent mulit-dim array.
    // _board[-1] will return undefined, making further checks moot. 
    // We must, then,  account for cells on edges when checking for 
    // buddies to ensure accurate results, and more importantly,
    // to keep the code from breaking, since not every cell has 8 
    // potential neighbors.
    
    // Must be kept within the scope of countCellBuddies
    // in order to be more easily accessed. 
    function cellIsOccupied(__rowIndex, __cellIndex) {
      if (_board[__rowIndex] !== undefined) {
        return _board[__rowIndex][__cellIndex];
      }
    }
    
    // The table below shows the distance 
    // from x & y that we must go to check the cell in the position 
    // represented by the table. The if statements below are based on 
    // this "buddy table".
    
    let numberOfBuds = 0;
    // The Buddy Table: 
    // [-1, -1], [-1,  0], [-1, +1], --> above
    // [0,  -1], [ CELL ], [0,  +1], --> our row
    // [+1, -1], [+1,  0], [+1, +1]; --> below

    // checks cell above and to the left
    if (cellIsOccupied(_rowIndex - 1, _cellIndex - 1)>=0.5) numberOfBuds++;
    // checks cell above
    if (cellIsOccupied(_rowIndex - 1, _cellIndex)>=0.5) numberOfBuds++;
    // checks cell above and to the right
    if (cellIsOccupied(_rowIndex - 1, _cellIndex + 1)>=0.5) numberOfBuds++;
    // checks cell to the left
    if (cellIsOccupied(_rowIndex, _cellIndex - 1)>=0.5) numberOfBuds++;
    // checks cell to the right
    if (cellIsOccupied(_rowIndex, _cellIndex + 1)>=0.5) numberOfBuds++;
    // checks cell below and to the left
    if (cellIsOccupied(_rowIndex + 1, _cellIndex - 1)>=0.5) numberOfBuds++;
    // checks cell below
    if (cellIsOccupied(_rowIndex + 1, _cellIndex)>=0.5) numberOfBuds++;
    // checks cell below and to the right
    if (cellIsOccupied(_rowIndex + 1, _cellIndex + 1)>=0.5) numberOfBuds++;

    return numberOfBuds;
  }



export {createBoard,oneDimensional,getNextBoard,tileClick};