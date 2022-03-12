import { getAllItemIDs, getFullItemData } from '../../lib/get-portfolio-items'
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
                src={`/images/${itemData.cover.cover_image}`}
                layout='fill'
                objectFit="cover"
            />
            <div className='coverContainer'> 
                <div className='coverTitle'>
                    <h1 className={styles.homeTitle}>{itemData.cover.title} </h1>
                    <p>{itemData.overview.overview_text}</p>
                </div>
            </div>
        </div>
        <div className="portfolioTemplate">

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

            <div className="sectionsContainer">
                {itemData.sections.map(section => 
                    <div className="section">
                        <h6 className="sectionDivider">
                            {section.divider}
                        </h6>
                        {section.content.map(({ heading, text }) => <>
                            <h2>
                                {heading}
                            </h2>
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                        </>)}
                    </div>)}            

            </div>
        </div>
    </>
  )
}