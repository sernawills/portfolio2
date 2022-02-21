import Link from 'next/link';

function Home() {
    return (
        <div className="home" >
            <div className="headerContainer">
                <h1> Hi, I am <Link href="/about" id="aboutMeLink"><a>Luciana</a></Link> </h1>
                <p> UX designer based in Berlin </p>
                <Link href="/portfolio">
                    <button> SEE PORTFOLIO </button>
                </Link>
                <Link href="/Test">
                    <button> Test it here! </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
