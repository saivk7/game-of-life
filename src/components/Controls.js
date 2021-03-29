import React from 'react';

//var game = require('./game');

const Controller = ({nextBoard}) =>{

    return(
        <button onClick={nextBoard}> Forward</button>
    );
}

export default Controller;