import { useState } from "react"

type IFormErrors = { name?: string, emailAddress?: string, subject?: string, message?: string }
type IMessageSent = { message: string, successful: boolean }

const ContactForm = () => {
    const inputFieldCss = "my-1 focus:outline-none rounded-sm text-base text-black"
    const [name, setName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [formErrors, setFormErrors] = useState<null | IFormErrors>(null)
    const [messageSentStatus, setMessageSentStatus] = useState<null | IMessageSent>(null)

    const clearFormInputs = () => {
        setName("")
        setEmailAddress("")
        setSubject("")
        setMessage("")
    }

    const handleValidation = (inputFieldName: string, inputFieldValue: string) => {
        switch (inputFieldName) {
            case "name":
            case "subject":
            case "message":
                if (inputFieldValue.length <= 0) {
                    setFormErrors(currentState => ({ ...currentState, [inputFieldName]: `${inputFieldName[0].toUpperCase() + inputFieldName.slice(1)} is required.` }))
                    break;
                }
                else {
                    const copyOfCurrentState = { ...formErrors }
                    delete copyOfCurrentState[inputFieldName]

                    setFormErrors({
                        ...copyOfCurrentState
                    })
                }
                break;
            case "emailAddress":
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) || inputFieldValue.length <= 0) {
                    setFormErrors(currentState => ({ ...currentState, [inputFieldName]: `Please enter a valid email address.` }))
                    break;
                }
                else {
                    const copyOfCurrentState = { ...formErrors }
                    delete copyOfCurrentState[inputFieldName]

                    setFormErrors({
                        ...copyOfCurrentState
                    })
                }
                break;
        }
    }

    const validateAllInputFields = () => {
        handleValidation("name", name)
        handleValidation("subject", subject)
        handleValidation("emailAddress", emailAddress)
        handleValidation("message", message)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        validateAllInputFields()

        if (JSON.stringify(formErrors) === '{}') {
            const response = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    emailAddress: emailAddress,
                    name: name,
                    subject: subject,
                    message: message
                }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            })

            const { error } = await response.json()

            if (error) {
                console.log(error)
                setMessageSentStatus({ message: "Message not sent successfully. Please try again.", successful: false })
                return
            }

            setMessageSentStatus({ message: "Message successfully sent!", successful: true })
            clearFormInputs()
        }
    }

    return (
        <form onSubmit={handleSubmit} className="shadow-md sm:shadow-xl shadow-mint-green mx-1 my-5 sm:w-1/3 h-fit bg-shark-grey rounded-lg">
            <h1 className="text-mint-green text-3xl md:text-5xl mx-1 my-5 lg:mx-7 lg:my-7">Send a message</h1>
            <label className="mx-1 my-5 lg:mx-7 lg:my-7 flex flex-col">Full Name:
                <input
                    className={`${inputFieldCss} ${formErrors?.name ? 'ring-2 ring-red-500' : name ? 'ring-2 ring-mint-green' : ''}`}
                    type="text"
                    name="name"
                    onChange={(e) => { setName(e.target.value); handleValidation("name", e.target.value.trim()) }}
                    value={name}
                    required
                />
                {formErrors?.name && (
                    <p className="text-red-500">{formErrors.name}</p>
                )}
            </label>

            <label className="mx-1 my-5 lg:mx-7 lg:my-7 flex flex-col">Email Address:
                <input
                    className={`${inputFieldCss} ${formErrors?.emailAddress ? 'ring-2 ring-red-500' : emailAddress ? 'ring-2 ring-mint-green' : ''}`}
                    type="text"
                    name="email"
                    onChange={(e) => { setEmailAddress(e.target.value); handleValidation("emailAddress", e.target.value.trim()) }}
                    value={emailAddress}
                    required
                />
                {formErrors?.emailAddress && (
                    <p className="text-red-500">{formErrors.emailAddress}</p>
                )}
            </label>

            <label className="mx-1 my-5 lg:mx-7 lg:my-7 flex flex-col">Subject:
                <input
                    className={`${inputFieldCss} ${formErrors?.subject ? 'ring-2 ring-red-500' : subject ? 'ring-2 ring-mint-green' : ''}`}
                    type="text"
                    name="subject"
                    onChange={(e) => { setSubject(e.target.value); handleValidation("subject", e.target.value.trim()) }}
                    value={subject}
                    required
                />
                {formErrors?.subject && (
                    <p className="text-red-500">{formErrors.subject}</p>
                )}
            </label>

            <label className="mx-1 my-5 lg:mx-7 lg:my-7 flex flex-col">Message:
                <textarea
                    className={`${inputFieldCss} h-36 ${formErrors?.message ? 'ring-2 ring-red-500' : message ? 'ring 2 ring-mint-green' : ''}`}
                    name="message"
                    onChange={(e) => { setMessage(e.target.value); handleValidation("message", e.target.value.trim()) }}
                    value={message}
                    required
                />
                {formErrors?.message && (
                    <p className="text-red-500">{formErrors.message}</p>
                )}
            </label>

            <div className="mx-1 my-5 lg:mx-7 lg:my-7">
                <button
                    type="submit"
                    className={`w-36 rounded-md h-9 border border-solid 
                         hover:border-2 font-bold text-sm md:text-md text-center hover:border-mint-green`}
                >
                    Send Message
                </button>
                {messageSentStatus && (<p className={`my-5 lg:my-7 ${messageSentStatus.successful ? 'text-mint-green' : 'text-red-500'}`}>{messageSentStatus.message}</p>)}
            </div>
        </form>
    )
}

export default ContactForm