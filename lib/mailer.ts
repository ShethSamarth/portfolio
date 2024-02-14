import nodemailer from "nodemailer"

interface MailerProps {
  name: string
  email: string
  subject: string
  message: string
}

export const mailer = async ({
  name,
  email,
  subject,
  message,
}: MailerProps) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,

    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: "Contact Inquiry from Portfolio",
    html: `
        <h4>Name : ${name}</h4>
        <h4>Email : ${email}</h4>
        <h4>Subject : ${subject}</h4>
        <h4>Message : ${message}</h4>
    `,
  })
}
