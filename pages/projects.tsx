import ProjectCard from "../components/projectCard"

const Projects = () => {
    return (
        <section id="projects" className="h-content">
            <h1 className="text-3xl mx-1 my-5 md:text-5xl lg:mx-7 lg:my-7">Projects</h1>
            <div className="h-full grid grid-cols-1 sm:grid-cols-2 sm:gap-12 sm:mx-12 sm:my-12">
                <ProjectCard
                    projectTitle="Personal Website"
                    projectDescription={`This website was created as a fun way to showcase my personal projects.
                                         It also gave me an opportunity to work with the Next.js framework and
                                         play around with building and deploying using Vercel.
                                       `}
                    projectGitHubURL="https://github.com/A-nthonyMai/personal-website"
                    projectScreenshotPath="/images/projects/personal-website.png"
                    projectURL="http://anto.au"
                    projectTechStack={['React', 'Typescript', 'TailwindCSS']}
                />
            </div>
        </section>
    )
}

export default Projects