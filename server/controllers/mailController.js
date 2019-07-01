// const nodemailer = require('nodemailer');
// require('dotenv').config()

// const {EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD} = process.env

// async function email(req, res) {
//     console.log(req.body)
//     const {subject, body} = req.body

//     const transporter = nodemailer.createTransport({
//         service: EMAIL_SERVICE,
//         auth: {
//             user: EMAIL_USER,
//             pass: EMAIL_PASSWORD
//         }
//     })
//     // console.log(subject, body)
//         // var content = `name: ${name} \n email: ${EMAIL_USER} \n message: ${body} `;

//     let mail = {
//         from: 'Catz',
//         to: EMAIL_USER,
//         subject: subject,
//         text: body
//     }

//     transporter.sendMail(mail, (err, data)=>{
//         if(err) {
//             console.log('failed')
//             res.json({msg: 'fail'})
//             } else {
//             console.log('Popcorn')
//             res.json({msg: 'success'})
//         }
//     })
// }

// module.exports={
//     email
// }