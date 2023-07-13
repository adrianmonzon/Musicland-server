const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: "Gmail",
  // host: 'smtp.servidor-correo.net',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAILUSER,
    pass: process.env.EMAILPWD,
  },
});

console.log(transporter);
module.exports = transporter