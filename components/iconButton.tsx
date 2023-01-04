import Image from 'next/image'
import Link from 'next/link';

type iconButtonProps = {
    buttonText?: string,
    iconPath: string,
    link: string,
    cssClasses: string
}

const getAltTextFromPath = (path: string) => {
    const strings = path.split("/")
    return strings[strings.length - 1].split(".")[0]
}

const IconButton = ({ buttonText, iconPath, link, cssClasses }: iconButtonProps) => {
    const altText = getAltTextFromPath(iconPath)
    return (
        <Link href={link}>
            <Image className={cssClasses} src={iconPath} alt={altText} width={0} height={0} />
            {buttonText ? buttonText : ''}
        </Link>
    );
}

export default IconButton;