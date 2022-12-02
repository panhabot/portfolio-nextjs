import Image from 'next/image'
import styles from '../../styles/about/About.module.css'
import AboutData from '../../data/about'
import Github from '../../components/About/github';


export default function About () {
    const data = AboutData;
    return (
        <section id='about' >
        <div className={styles.container} >
            {/* heading */}

            <div className={styles.heading}>
                <Image src={'/assets/about.png'} width={93} height={95} alt='' />
                <p className={styles.title}>About Me</p>
            </div>
            <div className={styles.content}>

                <div className={styles.bio}>
                    <p className={styles.description}>{data.description}</p>
                    
                    <div className={styles.skillset}>
                        <p className={styles.skillText}>Skillset</p>
                        {
                            data.skillset.map((item) => {
                                return (
                                    <Image key={item.alt} src={`/${item.imageUrl}`} alt={item.alt} width={46} height={46} className={styles.skillLogo} />
                                )
                            })
                        }
                    </div>

                    <div className={styles.git}>
                        <p className={styles.contribute}>Contribution</p>
                        <Github />
                    </div>
                </div>

                <div className={styles.divider}>

                </div>
                {/* photo */}
                <div>
                    <Image src={'/assets/pf.png'} alt='profile' width={336} height={488} style={{objectFit:'cover', border: 'solid 1px black', padding: '.4em'}} />
                </div>
            </div>
        </div>
        </section>
    )
}