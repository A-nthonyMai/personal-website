import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Anthony Mai</title>
        <meta name="description" content="Anthony Mai's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div>
          <Image
            className={styles.logo}
            src="/images/profile.jpg"
            alt="Photo of Anthony Mai"
            width={400}
            height={400}
            priority
          />
        </div>
        <section>
          <p>
            Hi, I&aposm Anto and I&aposm a software engineer based out of Melbourne, Australia.
          </p>
        </section>
      </main>
    </>
  )
}
