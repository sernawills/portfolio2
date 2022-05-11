// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';


function Footer() {
    return (
        <div className='footer'>
            <p>
                &copy; 2022 Luciana Serna Wills
            </p>
            <p><Link href="/impressum"><a id='impressum'>Impressum</a></Link></p>
        </div>
    )
}

export default Footer; 
