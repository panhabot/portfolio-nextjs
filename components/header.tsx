import React from 'react';
import styles from '../styles/Header.module.css'
import Image from 'next/image'
export default function Header () {
    return (
        <div className={styles.header}>
            <div className={styles.contactWrapper}> 
                <Image src={'/assets/tel.svg'} width={58} height={58} alt={''} />
                <div className={styles.contact}>
                    <p className={styles.contactText}>+855 15 642 673</p>
                    <p className={styles.contactText}>kongpanhabot2000@gmail.com</p>
                </div>
            </div>
           <div>
           <p className={styles.logoTitle}>
                Bot .
            </p>
           </div>
           
           <div className={styles.plane}>
           <Image src={'/assets/plane.svg'} width={164} height={81} alt={''} />
           
           </div>
        </div>
    )
}