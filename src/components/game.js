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
            var random = Math.random()-0.3;
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






























export {createBoard,oneDimensional};