import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Landing.module.scss"
import menuStyles from "../styles/LandingHamburger.module.scss"


export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Victor de Andrés</title>
        <meta name="description" content="Listado de posts de blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Blog</p>
    </>
  )
}
