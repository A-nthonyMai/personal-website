type ProjectButtonProps = {
    url: string,
    buttonText: string,
    cssClasses: string
}

const ProjectButton = ({ url, buttonText, cssClasses }: ProjectButtonProps) => {
    const openInNewTab = () => {
        window.open(url, '_blank', 'noreferrer');
    };

    return (
        <button role="link" onClick={() => openInNewTab()} className={cssClasses}>
            {buttonText}
        </button>
    )
}

export default ProjectButton