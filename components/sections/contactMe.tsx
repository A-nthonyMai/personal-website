import ContactForm from "../contactForm"
import IconButton from "../iconButton"

const ContactMe = () => {
    return (
        <section id="contactMe" className="min-h-screen flex">
            <div className="w-full flex flex-col sm:flex-row justify-center my-24">
                <div className="flex flex-col my-7 w-full sm:mx-1 sm:w-1/4">
                    <h1 className="text-fuchsia-pink text-3xl md:text-5xl mx-2 lg:mx-7 my-2 lg:my-7">Get in Touch.</h1>
                    <p className="mx-2 my-2 lg:mx-7">I&apos;d love to have a chat about my projects or any potential opportunies you might have!</p>
                    <p className="mx-2 my-2 lg:my-7 lg:mx-7">Feel free to reach out to me using the contact form or via email, or send me a message on LinkedIn.</p>

                    <div className="inline-flex mx-2 my-2 lg:my-7 lg:mx-7">
                        <IconButton
                            iconPath={'/images/linkedIn-icon.svg'}
                            additionalCSS="mr-7 invert"
                            link={`https://www.linkedin.com/in/a-nthonymai`}
                        />
                        <IconButton
                            iconPath={'/images/email-icon.svg'}
                            additionalCSS="mr-7 invert"
                            link={`mailto:anthony.mai@hotmail.com?subject=Hi Anto.au!`}
                        />
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactMe