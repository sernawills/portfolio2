import React from 'react';
import styles from '../styles/play.module.css'

function PlayItem( {item} ) {
    return(
        <div className={styles.playItem}>
            <div style={{ backgroundImage:  `url(${item.cover.cover_image})`  }}>  </div>
            <h1> {item.cover.title} </h1>
            <p> {item.cover.description} </p>
        </div>
    )
}

export default PlayItem;
