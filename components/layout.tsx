import Header from "./header"
import styles from '../styles/Layout.module.css'
import NavBar from "./navbar"

export default function Layout ({children}) {
    return (
        <div className={styles.container}>
            <Header />
            <main>{children}</main>
        </div>
    )
}