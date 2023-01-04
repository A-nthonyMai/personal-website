import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main className="ml-6 flex items-center justify-center text-gray-300 py-4 md:py-24 md:px-24">
        <Image
          className="w-36 h-36 md:w-48 md:h-48 lg:w-96 lg:h-96 rounded-full"
          src="/images/anthony-mai.avif"
          alt="Photo of Anthony Mai"
          width={400}
          height={400}
        />
        <section className='ml-6 md:ml-16 lg:ml-32'>
          <p className="text-3xl my-2 md:text-7xl md:my-4 lg:my-8">Hi! I&apos;m <span className="text-mint-green font-semibold">Anto</span>.</p>
          <p className="text-1xl my-2 md:text-3xl md:my-4 lg:my-8">Software Engineer at <Link className="hover:underline decoration-mint-green" href="https://www.slalombuild.com/">Slalom<span className="text-[#2fe4f3]">_build</span></Link></p>
        </section>
      </main >
    </Layout>
  )
}
