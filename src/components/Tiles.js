import React from 'react';
import Tile from './Tile';



const Tiles = (num) =>{
    const TileFunction= (n) =>{
        console.log("tile function invo")
        const tiles = [];
        let i =1;
        while(i<=n){
            const tile = <Tile value={i}/>            
            tiles.push(tile);
            i++;
        }
        console.log(tiles);
        
        return tiles;
        
    }

    return(
        <div style={{display:"flex",flexWrap:"wrap", 
        alignItems:"center", justifyContent:"center",height:"600",width:"600"}}>
        
            {TileFunction(400)}
        </div>
    );

}

export default Tiles;