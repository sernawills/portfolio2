import { useState } from 'react';
import { PlayList } from '../helpers/PlayList';
import PlayItem from '../components/PlayItem';
import FilteringTabs from '../components/FilteringTabs';
import styles from '../styles/play.module.css';
import utilStyles from '../styles/utils.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { getAllItemPreviewData } from '../lib/get-play-items';

export async function getStaticProps() {
    const allItemsData = getAllItemPreviewData()
    const allCategories = ['All', ...new Set(allItemsData.map(item => item.category ))]
    console.log(allItemsData)
    console.log(allCategories)
    return {
      props: {
        allItemsData,
        allCategories
      }
    }
  }


const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: 'none',
        border: 'none',
    }
}));

function Play({allItemsData, allCategories}) {

    const [playItems, setPlayItem] = useState(allItemsData);
    const [filteringTabs, setFilteringTabs] = useState(allCategories)

    const filter = (filteringTab) => {
        if(filteringTab === 'All'){
            setPlayItem(allItemsData);
            return;
        }

        const filteredItems = allItemsData.filter(item => item.category === filteringTab);
        setPlayItem(filteredItems);
    }

    const classes = useStyles();

    return(
        <div className={styles.play}>
            <h1  className={`${styles.playTitle} ${utilStyles.pageTitle}`}>
                Play
            </h1>
            <p className={`${utilStyles.descriptionText} ${utilStyles.paddingBottom}`}>Trying new things is one of my favorite activities. Here you can find a collection of some projects I have worked privately.</p>
            <FilteringTabs filteringTab={filteringTabs} filter={filter}/>
            <Grid container spacing={2} className={classes.grid}>
                {playItems.map(playItem => (
                    <Grid item xs="auto">
                        <Paper className={classes.paper}>
                            <PlayItem item={playItem}/>
                        </Paper>
                    </Grid>)
                )}
            </Grid>
            
        </div>
    )
}

export default Play;