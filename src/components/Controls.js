import React from 'react';

//var game = require('./game');

const Controller = ({nextBoard}) =>{

    return(
        <button className="next" onClick={nextBoard}> Next Iteration</button>
    );
}

export default Controller;