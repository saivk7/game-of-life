import React from 'react';


const Tile = ({style,id,tileClick}) =>{

    /* the styling is done using the border box and float left properties */
    return(
        <div className="tile" onClick={tileClick} style={style} id={id}>{}</div>
        );
}


export default Tile;