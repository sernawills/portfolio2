import { useState } from "react";
import Image from "../lib/markdown2react/components/Image";
import Link from 'next/link';
import Head from 'next/head'

// import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

    return (
        <>
            <Head>
                <link rel="icon" href="/logo.png" />
                <meta
                name="description"
                content="Luciana Serna Wills"
                />
            </Head>
            
            <ul className="navbarContainer">
                <li className="navbarButtons" id="logo"><Link href="/"><a><Image src="/images/logo.png" alt="logo"/></a></Link></li>
                <li className="navbarButtons"><Link href="/portfolio"> PROJECTS </Link> </li>
                <li className="navbarButtons"><Link href="/about"> ABOUT </Link> </li>
                <li className="navbarButtons"><Link href="/play"> PLAY </Link></li>  
                <li className="navbarButtons"><Link href="/contact"> CONTACT </Link></li>
            </ul>
        </>
    )
}

export default Navbar;
