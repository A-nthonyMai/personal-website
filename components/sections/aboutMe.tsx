import Image from 'next/image'
import Link from 'next/link'
import IconButton from '../iconButton'
import NavBar from '../navbar'

const profileID = 'a-nthonymai'

const AboutMe = () => {
    return (
        <section id="aboutMe" className='w-full sm:h-screen flex flex-col'>
            <div className="flex flex-row items-center justify-center my-12 md:my-32">
                <div className='w-36 h-36 md:w-48 md:h-48 lg:w-96 lg:h-96 relative'>
                    <Image
                        className="rounded-full"
                        fill
                        src="/images/anthony-mai.avif"
                        alt="Photo of Anthony Mai"
                        priority
                        sizes="(max-width: 768px) 12rem,
                        (min-width: 1024px) 24rem,
                        9rem"
                    />
                </div>
                <div className='ml-6 md:ml-16'>
                    <p className="text-3xl my-2 md:my-4 lg:my-8 lg:text-8xl">Hi! I&apos;m <span className="text-mint-green font-semibold">Anto</span>.</p>
                    <p className="text-1xl my-2 md:my-4 lg:my-8 lg:text-2xl">Software Engineer at <Link className="hover:underline decoration-mint-green" href="https://www.slalombuild.com/">Slalom<span className="text-[#2fe4f3]">_build</span></Link></p>

                    <div className="inline-flex">
                        <IconButton
                            iconPath={'/images/linkedIn-icon.svg'}
                            additionalCSS="mr-7 invert"
                            link={`https://www.linkedin.com/in/${profileID}`}
                        />
                        <IconButton
                            iconPath={'/images/email-icon.svg'}
                            additionalCSS="mr-7 invert"
                            link={`mailto:hello@anto.au?subject=Hi Anto.au!`}
                        />
                        <IconButton
                            iconPath={'/images/github-icon.svg'}
                            link={`https://www.github.com/${profileID}`}
                        />
                    </div>
                </div>
            </div>
            <NavBar />
        </section>
    )
}

export default AboutMe