// import { PortfolioList } from '../helpers/PortfolioList';
// import PortfolioItem from '../components/PortfolioItem';
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/portfolio.module.css'
import { getAllItemPreviewData } from '../lib/get-portfolio-items'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {
    const allItemsData = getAllItemPreviewData()
    console.log(allItemsData)
    return {
      props: {
        allItemsData
      }
    }
  }

function Portfolio({ allItemsData }) {
    return(
        <div className={styles.portfolioContainer}>
                {allItemsData.map((item) => (
                        <Link href={`/portfolio-posts/${item.id}`}>
                            <div className={styles.portfolioItem} key={item.id}>
                                <div className={styles.portfolioItemLeft}>
                                    <Image
                                        src={`/images/${item.cover.cover_image}`}
                                        layout='fill'
                                        objectFit="contain"
                                    />
                                </div>
                                <div className={styles.portfolioItemRight}>
                                    <h1 className={utilStyles.entryTitle}> {item.cover.title} </h1>
                                    <p> {item.cover.description} </p>
                                    <div className={styles.itemTagsContainer}> {item.cover.tags.map(tag =>
                                        <span className={styles.itemTags}>{tag}</span>
                                    )} </div>
                                </div>
                            </div>
                        </Link>                 
                ))}
        </div>
    )
}

export default Portfolio;