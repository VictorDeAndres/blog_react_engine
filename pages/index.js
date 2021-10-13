import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Landing.module.scss"
import menuStyles from "../styles/LandingHamburger.module.scss"


export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Victor de Andrés</title>
        <meta name="description" content="Victor de andres personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside id="sidebarmenu">
        <input id="hamburger" type="checkbox" className={menuStyles["hamburger-checkbox"]}></input>
        <label htmlFor="hamburger" className={menuStyles["hamburger-label"]} role="button">&#xf0c9;</label>

        <nav role="navigation" className={menuStyles["sidebar"]}>
          <div className={menuStyles["barmenu"]}>
            <div className={menuStyles["menu"]}>
              <ul>
                <li>
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Proyectos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a>Sobre mi</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={menuStyles["footer"]}>
              <a href="http://es.linkedin.com/in/vdeandres" className="footer--icon fa fa-linkedin"></a>
              <a href="https://github.com/VictorDeAndres" className="footer--icon fa fa-github"></a>
              <a href="https://twitter.com/victor_deandres" className="footer--icon fa fa-twitter"></a>
            </div>
          </div>
        </nav>
      </aside>

      <div className={styles.landing__page__container}>
        <div className={styles["landing__page__container--image"]}>
          <div className={styles["landing__page__card"]}>
            <div className={styles["landing__page__card--name"]}>Victor de Andrés</div>
            <div className={styles["landing__page__card--title"]}>Software Engineer</div>
            <div className={styles["landing__page__card--subtitle"]}>Solutions Architect</div>
          </div>
        </div>
      </div>
    </>
  )
}
