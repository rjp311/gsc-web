import styles from "../styles/components/header.module.css";
import Link from "next/link";
// import { routes } from "../utils/routes";

export default function Header(props) {
  const {title, bg} = props;
  // console.log(title, bg);
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/img/logo.jpg" />
          </div>
          <nav className={styles.navigation}>
            <ul>
              {/* {routes.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.path}>
                      <a>{link.name}</a>
                    </Link>
                  </li>
                )
              })} */}
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.hero} style={{ backgroundImage: `url('${bg ? bg : 'img/pool1.jpg'}')`}} />
    </header>
  )
}

