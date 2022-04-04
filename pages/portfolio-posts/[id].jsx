import { getAllItemIDs, getFullItemData } from '../../lib/get-portfolio-items'
import json2next from '../../lib/markdown2react/json2next'
import Image from "next/image";
import styles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const itemData = await getFullItemData(params.id);
  return { props: { itemData } };
}

export async function getStaticPaths() {
  const ids = getAllItemIDs();
  return {
    paths: ids.map(id => { return { params: { id: id }} }),
    fallback: false };
}

export default function Post({ itemData }) {
  return (
    <>
        <div className="cover">
            <Image 
                src={itemData.cover.cover_image}
                layout='fill'
                objectFit="cover"
            />
            <div className='coverContainer'> 
                <div className='coverTitle'>
                    <h1 className={`${styles.homeTitle} ${styles.marginLeft}`}>{itemData.cover.title} </h1>
                    <p className={styles.descriptionText}>{itemData.cover.description}</p>
                </div>
            </div>
        </div>
        

            {/* OVERVIEW */}

        <div className="overviewContainer">
            <div className="overviewBox">
                    {itemData.overview.box.box_items.map(({heading, content}) =>
                        <div className='overviewSubBox'>
                            <div className="overviewBoxHeading">
                                {heading}
                            </div>
                            <div className="overviewBoxContent">
                                {content}
                            </div>
                        </div>)}
            </div>
        </div>

            {/* SECTIONS */}
        <div className="portfolioTemplate">
            <div className="sectionsContainer">
                { json2next(itemData.bodyContent, { styles }) }
            </div>
        </div>
    </>
  )
}