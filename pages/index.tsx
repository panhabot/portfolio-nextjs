import { NextPage } from "next";
import type { ReactElement } from "react";
import styles from '../styles/Home.module.css'
import NavBar from "../components/navbar";
import HomeSocial from "../components/Home/social";
import Image from "next/image";
import About from "./about";
import Project from "./projects";
const Home:NextPage = () => {
  return (
  <>
  <div className={styles.container}>
            <NavBar/>
            <div className={styles.content}>
              <HomeSocial />
              <div className={styles.nameContent}>
                <div className={styles.name}>
                  <p className={styles.iam}>I am,</p>
                  <p className={styles.username}>Kong Panhabot</p>
                  <p className={styles.occupation}>Software Dev.</p>
                </div>
                <div className={styles.shapeWrapper}>
                  <div className={styles.shapeRect}>
                  </div>
                  <div className={styles.shapeCircle}>
                      <p className={styles.projectTitle}>Projects</p>
                    </div>
                    <div className={styles.shapeResume}>
                      <p className={styles.projectTitle}>My Resume</p>
                    </div>
                </div>
              </div>
              
              <div className={styles.serviceContent}>
              <Image src={'/assets/poster3.png'} width={150} height={180} alt={''} style={{objectFit: 'contain'}}/>

                <Image src={'/assets/poster1.png'} width={150} height={180} alt={''} style={{objectFit: 'contain'}}/>
                <Image src={'/assets/poster2.png'} width={150} height={180} alt={''} style={{objectFit: 'contain'}}/>
              </div>
            </div>

  </div>
  <About></About>
  <Project/>

  </>
  )
}


export default Home;