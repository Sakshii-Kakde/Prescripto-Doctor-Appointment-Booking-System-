import express from "express";
import multer from "multer";
import nodemailer from "nodemailer";

const router = express.Router();

// Store uploaded resume temporarily in memory
const upload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, DOC and DOCX files are allowed."));
    }
  },
});

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post(
  "/apply",
  upload.single("resume"),
  async (req, res) => {
    try {

      const {
        name,
        email,
        phone,
        position,
        message,
      } = req.body;

      if (!name || !email || !phone || !position) {
        return res.status(400).json({
          message: "Please fill all required fields.",
        });
      }

      if (!req.file) {
        return res.status(400).json({
          message: "Please upload your resume.",
        });
      }

      await transporter.sendMail({
        from: process.env.EMAIL_USER,

        to: "careers@prescripto.com",

        replyTo: email,

        subject: `New Job Application - ${position}`,

        html: `
          <h2>New Career Application</h2>

          <p><strong>Position:</strong> ${position}</p>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Cover Message:</strong></p>

          <p>${message || "No message provided."}</p>

          <hr>

          <p>
            Resume is attached with this email.
          </p>
        `,

        attachments: [
          {
            filename: req.file.originalname,
            content: req.file.buffer,
            contentType: req.file.mimetype,
          },
        ],
      });

      return res.status(200).json({
        success: true,
        message:
          "Application submitted successfully. Your resume has been sent to our careers team.",
      });

    } catch (error) {

      console.error("Career application error:", error);

      return res.status(500).json({
        success: false,
        message:
          "Unable to send your application. Please try again later.",
      });
    }
  }
);

export default router;