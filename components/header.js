import styles from "../styles/components/header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { routes } from "../utils/routes";
import { Component, useState } from "react";

export default function Header(props) {
  const {title, bg} = props;
  const [active, setActive] = useState(false);

  const toggleNavigation = () => {
    console.log("yeet");
    setActive(!active);
  }

  // console.log(title, bg);
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <img src="/img/logo.jpg" />
              </a>
            </Link>
          </div>
          <div className={styles.burger} onClick={() => toggleNavigation()}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <nav className={`${styles.navigation} ${active ? styles.active : ''}`}>
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
      </div>
      <div className={styles.hero} style={{ backgroundImage: `url('${bg ? bg : 'img/pool1.jpg'}')`}} />
      <div className={styles.overlay}>
        {title ? <h1 className={styles.title}>{title}</h1> : <></>}
      </div>
    </header>
  )
}

