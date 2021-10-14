import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
function Nav() {
    return (
        <nav className={styles.nav}>
           <ul className={styles.ul}>
           <li className={styles.li}>
               <Link href="/"><a>Home</a></Link>
           </li>
           <li className={styles.li}>
               <Link href="/about"><a>About</a></Link>
           </li>
           </ul>
        </nav>
    )
}

export default Nav
