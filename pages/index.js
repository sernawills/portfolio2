import Link from 'next/link';

function Home() {
    return (
        <div className="home" >
            <div className="headerContainer">
                <h1> Hi, I am <Link href="/about"><a id="aboutMeLink">Luciana</a></Link> </h1>
                <p> UX designer based in Berlin </p>
                <Link href="/portfolio">
                    <button className='buttons'> SEE PORTFOLIO </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
