import styles from "../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";
import { routes } from "../utils/routes";

export default function Header(props) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/img/logo.jpg" />
        </div>
        <nav className={styles.navigation}>
          <ul>
            {routes.map((link, index) => {
              return (
                <li key={index}>
                  <Link href={link.path}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.hero}>
        <img src="/img/pool1.jpg" />
      </div>
    </header>
  )
}

