import { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
// import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <Link href="/"><a className="logo"><Image src="/images/logo.png" layout="fill" objectFit="contain" /></a></Link>
                <div className="hiddenLinks">
                    <Link href="/"><a className="logo"><Image src="/images/logo.png" layout='fill' objectFit="contain" /></a></Link>
                    <Link href="/portfolio"> PORTFOLIO </Link>
                    <Link href="/about"> ABOUT </Link>
                    <Link href="/play"> PLAY </Link>
                    <Link href="/contact"> CONTACT </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link href="/portfolio"> PORTFOLIO </Link>
                <Link href="/about"> ABOUT </Link>
                <Link href="/play"> PLAY </Link>
                <Link href="/contact"> CONTACT </Link>
                <button onClick={toggleNavbar}>
                    icon missing :({/* <ReorderIcon /> */}
                </button>
            </div>
        </div>
    )
}

export default Navbar;
