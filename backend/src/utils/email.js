const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (to, subject, html) => {
    try {
        await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, html });
        console.log('Email sent successfully');
        return;
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const sendVerificationEmail = async (email, verificationCode) => {
    try {
        const emailBody = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f4f4f4;
                        border-radius: 8px;
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #666;
                        margin-bottom: 20px;
                    }
                    .verification-code {
                        font-size: 20px;
                        font-weight: bold;
                        color: #007bff;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Verify Your Email Address</h1>
                    <p>Please use the following verification link to complete your registration:</p>
                    <a class="verification-code" href="${verificationCode}">${verificationCode}</a>
                    <p>If you didn't request this verification link, you can safely ignore this email.</p>
                </div>
            </body>
            </html>
        `;
        const subject = "Account Verification";
        await sendEmail(email, subject, emailBody);
        return;
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Failed to send verification email');
    }
};

const sendResetPasswordEmail = async (email, resetPasswordCode) => {
    try {
        const emailBody = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f4f4f4;
                        border-radius: 8px;
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #666;
                        margin-bottom: 20px;
                    }
                    .verification-code {
                        font-size: 24px;
                        font-weight: bold;
                        color: #007bff;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Reset Account Password</h1>
                    <p>Please use the following code to reset your password:</p>
                    <p class="verification-code">${resetPasswordCode}</p>
                    <p>If you didn't request this reset password code, you can safely ignore this email.</p>
                </div>
            </body>
            </html>
        `;
        const subject = "Reset Password";
        await sendEmail(email, subject, emailBody);
        return;
    } catch (error) {
        console.error('Error sending reset password email:', error);
        throw new Error('Failed to send reset password email');
    }
};

module.exports = { sendVerificationEmail, sendResetPasswordEmail };
