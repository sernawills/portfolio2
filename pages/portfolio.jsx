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
    return {
      props: {
        allItemsData
      }
    }
  }

function Portfolio({ allItemsData }) {
    return(
        <div className={styles.portfolioContainer}>
            <h1 className={`${styles.portfolioTitle} ${utilStyles.pageTitle}`}>PROJECTS</h1>
            <p className={`${utilStyles.descriptionText} ${utilStyles.paddingBottom}`}>Here&apos;s a selection of some projects I have worked on. If you have any questions don&apos;t hesistate to contact me!</p>
                {allItemsData.map((item) => (
                        <Link href={`/portfolio-posts/${item.id}`} key={item.id}>
                            <div className={styles.portfolioItem}>
                                <div className={styles.portfolioItemLeft}>
                                    <Image
                                        src={item.cover.cover_image}
                                        layout='fill'
                                        objectFit="cover"
                                    />
                                </div>
                                <div className={styles.portfolioItemRight}>
                                    <h1 className={utilStyles.itemTitle}> {item.cover.title} </h1>
                                    <p className={utilStyles.pTags}> {item.cover.description} </p>
                                    <div className={`${styles.itemTagsContainer} ${utilStyles.overviewTags}`}> {item.cover.tags.map((tag, index) =>
                                        <span className={styles.itemTags} key={index}>{tag}</span>
                                    )} </div>
                                </div>
                            </div>
                        </Link>                 
                ))}
        </div>
    )
}

export default Portfolio;
