import Image from 'next/image'
import Link from 'next/link';

type iconButtonProps = {
    buttonText?: string,
    iconPath: string,
    link: string,
    additionalCSS?: string
}

const getAltTextFromPath = (path: string) => {
    const strings = path.split("/")
    return strings[strings.length - 1].split(".")[0]
}

const IconButton = ({ buttonText, iconPath, link, additionalCSS }: iconButtonProps) => {
    const altText = getAltTextFromPath(iconPath)

    return (
        <Link className={`w-10 h-10 lg:w-16 lg:h-16 relative ${additionalCSS ? additionalCSS : ''}`} href={link}>
            <Image fill src={iconPath} alt={altText} />
            {buttonText ? buttonText : ''}
        </Link>
    );
}

export default IconButton;