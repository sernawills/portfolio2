import React from 'react';
import styles from '../styles/play.module.css';

function FilteringTabs({filteringTab, filter}) {
    return (
        <div>
            {
                filteringTab.map((category, index)=>{
                    return <span onClick={()=> filter(category)} className={styles.filteringTab} key={index}>{category}</span>
                })
            }
        </div>
    )
}

export default FilteringTabs;