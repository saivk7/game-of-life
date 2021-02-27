import React from 'react';

import Tile from './Tiles';

const TileCount = 1000

const Board = ()=>{
    return(
        <div>
            <p>Hello World!</p>
            <Tile num={TileCount} />
        </div>
    );
}


export default Board;