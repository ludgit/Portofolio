const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'baratzstore1@gmail.com',
        pass: 'Covid-19'
    }
});
