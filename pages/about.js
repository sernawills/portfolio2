import styles from '../styles/about.module.css'
import utils from '../styles/utils.module.css'

function About() {
    return (
        <div className={styles.about}>
            {/* <div className='aboutTop' style={{ backgroundImage:  `url(${AboutImage})`  }}>

            </div>  */}
            <h1 className={utils.pageTitle}>
                    Hi, I&apos;m <a className={styles.luciana}> Luciana</a>
            </h1>
                <section>
                    <p className={utils.descriptionText}>
                    A Colombian UX Designer based in Berlin, with a passion for human and life centered design. Living abroad since a young age has helped me develop flexible thinking and amplify my curiosity.
                    </p>

                    <p>
                    Before changing to design I studied IT Systems Engineering at Hasso Plattner Institute for four semesters. There I earned a Design Thinking certificate for which I worked in an interdisciplinary team to design an attractive work environment for our partner Würth Electronics. While transitioning from software engineering to design I completed two bootcamps at TechLabs Berlin: one for UX design and one for web development. TechLabs is a non profit organization with the mission to close the tech gap, where I later on volunteered as a team leader for the UX design bootcamp. My contributions included holding talks for the participants, answering questions and creating challenges. Having served as the communication bridge between developers' and fellow designers, I have gained understanding of the developers' perspective and technical concepts.

                    The main tool I use for UI design is Figma however I am also familiar with the Adobe Suite. What I enjoy most is conducting user research, interviewing and testing. My native language is Spanish, and my English and German are both C1.
                    </p>
                </section>
                <section>
                    <div className={styles.box}>
                        <div className={styles.subbox}>
                            <div className={styles.subboxHeader}>
                                Skills: 
                            </div>
                            <div className={styles.subboxContent}>
                                Figma, Interviewing, 
                            </div>
                        </div>
                    </div>
                </section>
        </div>

    )
}

export default About;
