import { useState } from 'react';
import { PlayList } from '../helpers/PlayList';
import PlayItem from '../components/PlayItem';
import FilteringTabs from '../components/FilteringTabs';

const allCategories = ['All', ...new Set(PlayList.map(playItem => playItem.category ))]

function Play() {

    const [playItem, setPlayItem] = useState(PlayList);
    const [filteringTabs, setFilteringTabs] = useState(allCategories)

    const filter = (filteringTab) => {
        if(filteringTab === 'All'){
            setPlayItem(PlayList);
            return;
        }

        const filteredItems = PlayList.filter(playItem => playItem.category === filteringTab);
        setPlayItem(filteredItems);
    }

    return(
        <div className='play'>
            <h1 className='playTitle'>
                Play
            </h1>
            <p>This page is currently under construction. Will be done soon, I appreciate your interest!</p>
            <FilteringTabs filteringTab={filteringTabs} filter={filter}/>
            <PlayItem playItem={playItem}/>
        </div>
    )
}

export default Play;