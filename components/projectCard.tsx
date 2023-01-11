import Image from "next/image"
import Link from "next/link"
import ProjectButton from "./projectButton"

type projectCardProps = {
    projectURL?: string,
    projectScreenshotPath: string,
    projectTitle: string,
    projectDescription: string,
    projectTechStack: string[],
    projectGitHubURL: string
}


const ProjectCard = ({ projectURL, projectScreenshotPath, projectTitle, projectDescription, projectGitHubURL, projectTechStack }: projectCardProps) => {
    const imageComponent = <Image fill src={projectScreenshotPath} alt={`Screenshot of the ${projectTitle} project`} />

    return (
        <div className="flex flex-col items-center">
            <div className="w-full md:w-5/7 h-full bg-shark-grey" >
                <div className="w-full sm:flex sm:flex-col">
                    <div className="w-full h-64 sm:h-48 lg:h-96 relative">
                        {projectURL ? <Link href={projectURL}>{imageComponent}</Link> : imageComponent}
                    </div>
                    <div className="w-full flex flex-col">
                        <div className="sm:h-36 sm:mx-5 sm:my-5">
                            <div>
                                <h2 className="text:xl md:text-2xl text-shakespeare-blue">{projectTitle}</h2>
                                <p className="text:lg my-5">{projectDescription}</p>
                            </div>
                        </div>
                        <div className="sm:mx-5 sm:my-5">
                            <h2 className="text:lg md:text-xl text-sienna-orange">Technology Stack</h2>
                            <ul className="text:lg my-1">
                                {projectTechStack.map((techStack) =>
                                    <li key={techStack}>{techStack}</li>
                                )}
                            </ul>
                        </div>

                        <div className='flex flex-row w-full justify-left mx-5 my-5'>
                            {
                                projectURL ?
                                    <ProjectButton
                                        url={projectURL}
                                        buttonText="Visit Site"
                                        cssClasses={`w-24 bg-concrete-white rounded-lg h-9 
                                                     font-bold text-sm md:text-md text-center 
                                                     text-black
                                                     hover:underline decoration-mint-green
                                                     hover:decoration-2
                                                    `}
                                    />
                                    :
                                    ''
                            }
                            <ProjectButton
                                url={projectGitHubURL}
                                buttonText="View Repo"
                                cssClasses={`w-24 rounded-lg h-9 border border-solid 
                                             hover:border-2 hover:border-mint-green ${projectURL ? 'ml-9' : ''} 
                                             font-bold text-sm md:text-md text-center`
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard