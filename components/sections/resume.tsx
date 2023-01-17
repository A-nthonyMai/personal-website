const Resume = () => {
    return (
        <section id="resume" className="w-full sm:min-h-screen flex flex-col">
            <h1 className="text-3xl mx-1 my-5 md:text-5xl lg:mx-7 lg:my-7">Resume</h1>
            <div className="overflow-hidden flex flex-col sm:flex-row">
                <iframe className="w-screen h-screen mx-1 lg:mx-7 md:w-4/5 lg:w-3/5 xl:w-2/5" src={`https://drive.google.com/file/d/1YqvlhIfvGME_BmJOMbLL7wLRliZ5mnYJfZFE1Ns2w5M/preview#view=fitH`} />
                <a
                    download
                    href="/assets/Anthony Mai - Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-36 rounded-md h-9 border border-solid 
                         hover:border-2 font-bold text-sm md:text-md text-center hover:border-starship-yellow leading-loose`}
                >
                    Download File
                </a>
            </div>
        </section>
    )
}

export default Resume