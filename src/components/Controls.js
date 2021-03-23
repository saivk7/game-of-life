import React from 'react';

var game = require('./game');

const Controller = () =>{

    return(
        <button onClick={game.nextBoard}> Forward</button>
    );
}

export default Controller;