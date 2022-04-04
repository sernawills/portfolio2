import '../styles/About.css';
import '../styles/App.css';
import '../styles/Footer.css';
import '../styles/Home.css';
import '../styles/Navbar.css';
import '../styles/Play.css';
import '../styles/Portfolio.css';
import '../styles/PortfolioTemplate.scss';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (<>
    <Navbar {...pageProps} />
    <Component {...pageProps} />
    <Footer {...pageProps} />
  </>);
}

export default MyApp
