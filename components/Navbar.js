import { useState } from "react";
import Image from "../lib/markdown2react/components/Image";
import Link from 'next/link';
import Head from 'next/head'

// import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <>
            <Head>
                <link rel="icon" href="/logo.png" />
                <meta
                name="description"
                content="Luciana Serna Wills"
                />
            </Head>
            
            <div className="navigation">
                <button className="menuButton" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
                  +
                </button>

                <div className={isNavExpanded ? "navbarContainer expanded" : "navbarContainer"}>
                    <ul>
                        <li className="navbarButtons" id="logo"><Link href="/" >HOME</Link></li>
                        <li className="navbarButtons"><Link href="/portfolio"> PROJECTS </Link> </li>
                        <li className="navbarButtons"><Link href="/about"> ABOUT </Link> </li>
                        <li className="navbarButtons"><Link href="/play"> PLAY </Link></li>  
                    </ul>
                </div>
            </div>
        </>    
    )
}

export default Navbar;
