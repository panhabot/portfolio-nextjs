
import Image from 'next/image'
import styles from '../../styles/project/ProjectCard.module.css'

export default function ProjectCard (props:any) {
    const item = props.item;
    console.log(item.technologyImage)
    return (
        <div className={styles.container}>
           <div className={styles.logoContent}>
                <p className={styles.name}>{item.name}</p>
                <Image src={`/${item.logoImage}`} width={86} height={125} style={{objectFit:'contain'}} alt='' />
           </div>
           <div className={styles.descriptionContent}>
                <p className={styles.description} >{item.shortDescription}</p>
                <div className={styles.skillLogo}>
                   
                    {
                        item.technologyImage.map(data => {
                            return(<Image key={data.alt} src={`/${data.imageUrl}`} width={36} height={36} alt={data.alt} className={styles.logoImage}  style={{objectFit: 'cover'}}/>)

                        })
                    }
                </div>
                <div className={styles.viewBtn}>
                    <p className={styles.viewText}>View</p>
                </div>
           </div>
        </div>
    )
}