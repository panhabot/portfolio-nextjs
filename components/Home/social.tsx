
import social from "../../data/social"
import Image from 'next/image'
import styles from '../../styles/Home/socialhome.module.css'
export default function HomeSocial () { 
    return (
        <div className={styles.container}>
            <div className={styles.line}>

            </div>
            <div className={styles.socialIcon}>
            {
                social.map((data) => {
                    return (
                    <a className={styles.iconBtn} key={data.alt}>
                    <Image src={`/${data.imagePaths}`}  key={data.alt} alt={data.alt}  width={20} height={20} />
                    </a>)
                })
            }
            </div>
<div className={styles.line}>

</div>        </div>
    )
}
