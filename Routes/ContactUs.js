
const express = require('express');
const router = express.Router();
const ContactUs = require('../Models/ContactUs');
const nodemailer = require('nodemailer');
require("dotenv").config();


router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const contactUs = new ContactUs({
      name,
      email,
      phone,
      message,
    });

    // Save the contactUs object to the database
    await contactUs.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASS,
        },
    });

    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: 'New Contact Us Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Failed to submit contact form' });
  }
});

module.exports = router;
