// import { PortfolioList } from '../helpers/PortfolioList';
// import PortfolioItem from '../components/PortfolioItem';

function Portfolio() {
    return(
        <div className='portfolio'>
            <h1 className='portfolioTitle'>
                Portfolio
            </h1>
            <div className='portfolioList'>
            {/* {PortfolioList.map((portfolioItem, key) => {
                return (
                    <PortfolioItem 
                    key={key}
                    image={portfolioItem.image} 
                    name={portfolioItem.name} 
                    tags={portfolioItem.tags} 
                    description={portfolioItem.description}
                    />
                );
            })} */}
            </div>
        </div>
    )
}

export default Portfolio;
