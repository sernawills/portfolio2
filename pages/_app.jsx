import '../styles/App.css';
import '../styles/Footer.css';
import '../styles/Home.css';
import '../styles/Navbar.css';
import '../styles/Portfolio.css';
import '../styles/PortfolioTemplate.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (<>
    <Navbar {...pageProps} />
    <div className='content'> <Component {...pageProps} /> </div>
    <Footer {...pageProps} />
  </>);
}

export default MyApp
