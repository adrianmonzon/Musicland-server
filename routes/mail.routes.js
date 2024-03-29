const express = require('express')
const router = express.Router()

const transporter = require('../configs/nodemailer.config')


// router.get('/send-email', (req, res) => res.render('send-email'))

router.post('/send-email', (req, res) => {

    const { contactEmail, subject, message } = req.body

    console.log(req.body)

    transporter
        .sendMail({
            from: `'Encuentra un Músico' <${process.env.EMAIL_ACCOUNT}>`,
            to: contactEmail,
            subject,
            text: message,
            html: `<b>${message}</b>`
        })
        .then(info => res.json(info))
        .catch(error => console.log(error))
})


module.exports = router