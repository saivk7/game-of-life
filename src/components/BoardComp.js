import React from 'react';




const Board = ({board})=>{

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