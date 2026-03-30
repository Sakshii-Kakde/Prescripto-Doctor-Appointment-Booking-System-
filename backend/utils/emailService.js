import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendAppointmentEmail = async (email, doctor, date, time) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Appointment Confirmation",
    html: `
      <h2>Appointment Confirmed</h2>
      <p>Your appointment has been successfully booked.</p>

      <p><b>Doctor:</b> ${doctor}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>

      <br/>
      <p>Thank you for using Prescripto.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};