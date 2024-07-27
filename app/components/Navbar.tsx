import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.profile}>
                <img
                    src="/avatar/avatar.jpg"
                    alt="Profile Avatar"
                    className={styles.avatar}
                />
                <h2 className={styles.name}>Edison</h2>
            </div>
            <ul className={styles.navList}>
                <li><a href="/" className={styles.navItem}>Home</a></li>
                <li><a href="/about" className={styles.navItem}>About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
