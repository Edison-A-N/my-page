import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <div className={styles.profile}>
                    <Image
                        src="/avatar/avatar.jpg"
                        alt="Profile Avatar"
                        width={100}
                        height={100}
                        className={styles.avatar}
                        priority
                    />
                    <Link href="/" >
                        <h2 className={styles.name}>Edison</h2>
                    </Link>
                </div>
                <ul className={styles.navList}>
                    <li><Link href="/" className={styles.navItem}>Home</Link></li>
                    <li><Link href="/about" className={styles.navItem}>About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
