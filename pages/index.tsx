import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Anthony Mai</title>
        <meta name="description" content="Anthony Mai's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="flex items-center justify-center py-48">
        <Image
          className="rounded-full"
          src="/images/anthony-mai.avif"
          alt="Photo of Anthony Mai"
          width={400}
          height={400}
        />
        <section className='px-32'>
          <p className="text-5xl my-8">Hi! I&apos;m <span className="text-mint-green font-semibold">Anto</span>.</p>
          <p className="text-3xl my-8">Software Engineer at <Link className="hover:underline decoration-mint-green" href="https://www.slalombuild.com/">Slalom<span className="text-[#2fe4f3]">_build</span></Link></p>
        </section>
      </main>
    </>
  )
}
