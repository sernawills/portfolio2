import { getAllItemIDs, getFullItemData } from '../../lib/get-portfolio-items'
import Image from "next/image";

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
    <div className="portfolioTemplate">

            {/* COVER */}
            
            <h6 className="sectionDivider">
                — OVERVIEW
            </h6>

            <div className="coverContainer">
                <div className="coverContainerLeft">
                    <h1>
                        {itemData.cover.title}
                    </h1>
                    <p>
                        {itemData.cover.description}
                    </p>
                </div>
                <div className="coverContainerRight">
                    {/* <div className="coverImage" style={{ backgroundImage:  `url(${someImage})`  }}></div> */}
                </div> 
            </div>

            {/* OVERVIEW */}

            <div className="overviewContainer">
                <div className="overviewBox">
                        {itemData.overview.box.box_items.map(({heading, content}) =>
                            <div className='overviewSubBox'>
                                <h5 className="overviewBoxHeadings">
                                    {heading}
                                </h5>
                                <p className="overviewBoxContent">
                                    {content}
                                </p>
                            </div>)}
                </div>
               
                <div className="overviewText">
                    {itemData.overview.overview_text}
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
  )
}