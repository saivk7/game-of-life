import React from 'react';

import Tile from './Tiles';

const TileCount = 1000

const Board = ()=>{
    return(
        <div className="board" >
            {/*console.log(TileCount, "from board")*/}
            <Tile num={TileCount} />
        </div>
    );
}


export default Board;