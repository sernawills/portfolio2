import React from 'react'

function FilteringTabs({filteringTab, filter}) {
    return (
        <div className="filteringTabs">
            {
                filteringTab.map((category)=>{
                    return <span onClick={()=> filter(category)} className="filteringTab">{category}</span>
                })
            }
        </div>
    )
}

export default FilteringTabs;