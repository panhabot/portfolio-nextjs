import Image from 'next/image'
import ProjectCard from '../../components/Project/ProjectCard'
import ProjectData from '../../data/project'
import styles from '../../styles/project/Project.module.css'


export default function Project () {
    return (
        <section id='project' >
        <div className={styles.container} >
            {/* heading */}

            <div className={styles.heading}>
                <Image src={'/assets/project.png'} width={100} height={100} alt='' style={{objectFit: 'contain'}} />
                <p className={styles.title}>Projects</p>
            </div>
            <div className={styles.projectContents}>

            {ProjectData.map(item => {
            return <ProjectCard key={item.name} item={item} />
            })}


        </div>
        </div>
        
        </section>
    )
}