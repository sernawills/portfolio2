import React from 'react'

function FilteringTabs({filteringTab, filter}) {
    return (
        <div className="filteringTabs">
            {
                filteringTab.map((category, index)=>{
                    return <span onClick={()=> filter(category)} className="filteringTab" key={index}>{category}</span>
                })
            }
        </div>
    )
}

export default FilteringTabs;