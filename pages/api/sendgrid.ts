import sendgrid, { ResponseError } from "@sendgrid/mail"
import { NextApiRequest, NextApiResponse } from "next"

if (process.env.SENDGRID_API_KEY) {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    try {
        await sendgrid.send({
            to: "hello@anto.au",
            from: "noreply@anto.au",
            subject: `[Message from Anto.au] ${req.body.subject}`,
            html: `<html lang="en">
                        <body>        
                            <div class="container" style="font-family: 'helvetica', 'ui-sans'; margin-left: 20px;margin-right: 20px;">
                                <h3>Full Name</h3>
                                <p>${req.body.name}</p>
                                <h3>Email Address</h3>
                                <p>${req.body.emailAddress}</p>
                                <div style="font-size: 16px;">
                                    <h3>Message</h3>
                                    <p>${req.body.message}</p>
                                    <br>
                                </div>
                            </div>
                        </body>
                    </html>`
        })
    } catch (error: any) {
        if (error.kind === ResponseError) {
            return res.status(error.code || 500).json({ error: error.message })
        }
        console.error(error)
    }

    return res.status(200).json({ error: "" })
}

export default sendEmail