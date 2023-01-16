

const downloadFile = () => {
    window.open('https://drive.google.com/u/1/uc?id=1BA5kWl8drLoLhycfRX76UzU4iQPqokAv&export=download', '_blank')
}
const Resume = () => {
    return (
        <section id="resume" className="w-full sm:h-screen flex flex-col">
            <h1 className="text-3xl mx-1 my-5 md:text-5xl lg:mx-7 lg:my-7">Resume</h1>
            <div className="overflow-hidden flex flex-row">
                <iframe className="w-screen h-screen mx-1 lg:mx-7 md:w-1/3" src="https://drive.google.com/file/d/1BA5kWl8drLoLhycfRX76UzU4iQPqokAv/preview#view=fitH`" />
                <button className={`w-36 rounded-md h-9 border border-solid 
                         hover:border-2 font-bold text-sm md:text-md text-center hover:border-starship-yellow`} onClick={() => downloadFile()}>Download File</button>
            </div>
        </section>
    )
}

export default Resume