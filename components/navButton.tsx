import Link from "next/link"

type NavButtonProps = {
    buttonText: string
    link: string
    borderColour?: string
}

const NavButton = ({ buttonText, link, borderColour }: NavButtonProps) => {
    const buttonCSS = 'w-36 md:w-48 lg:w-64 sticky top-[100vh] h-12 lg:h-8 font-normal text-center text-lg lg:text-xl'
    return (
        <div>
            <button className={borderColour ? `border-b-4 ${borderColour} ${buttonCSS}` : buttonCSS}>
                <Link href={link}>
                    {buttonText}
                </Link>
            </button>
        </div>
    )
}

export default NavButton