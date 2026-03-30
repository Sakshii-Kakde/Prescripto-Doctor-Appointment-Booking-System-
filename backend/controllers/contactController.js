import nodemailer from "nodemailer"

const sendMessage = async (req, res) => {

  try {

    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: email,
      to: "kakdesakshi266@gmail.com",
      subject: "New Contact Message",
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `
    }

    await transporter.sendMail(mailOptions)

    res.json({ success: true })

  } catch (error) {
    console.log(error)
    res.json({ success: false })
  }

}

export { sendMessage }