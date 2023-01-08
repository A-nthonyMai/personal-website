import Link from "next/link"

type NavButtonProps = {
    buttonText: string
    link: string
    borderColour?: string
}

const NavButton = ({ buttonText, link, borderColour }: NavButtonProps) => {
    const navButtonCSS = 'w-1/3 md:w-48 lg:w-64 text-center'

    return (
        <div className={borderColour ? `border-b-4 ${borderColour} ${navButtonCSS}` : navButtonCSS}>
            <button className='h-12 lg:h-8 font-medium text-sm md:text-lg lg:text-xl'>
                <Link href={link}>
                    {buttonText}
                </Link>
            </button>
        </div>
    )
}

export default NavButton