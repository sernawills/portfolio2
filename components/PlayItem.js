import React from 'react';

function PlayItem( {playItem} ) {
    return(
        playItem.map((item) => {
            return (
            <div className='playItem'>
                <div style={{ backgroundImage:  `url(${item.image})`  }}>  </div>
                <h1> {item.name} </h1>
                <p> {item.description} </p>
            </div>
        )})
            
    )
}

export default PlayItem;
