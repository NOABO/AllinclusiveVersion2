const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
const PORT = 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('angularFrontend/dist/angularFrontend'));

//database connection 
const Url = 'mongodb://localhost:27017/allinclusive'
mongoose.connect(Url, {
  useMongoClient: true, useNewUrlParser: true, useUnifiedTopology: true
})
const Connection = mongoose.connection;
Connection.on('error', console.error.bind(console, 'connection error:'))
Connection.once('open', function () {
  console.log('Database is connected ')

})

//Routes middlewares
app.use('/api/user', require('././server/routes/auth.js'));

app.use('/api/event', require('././server/routes/events.js'));
app.use('/api/company', require('././server/routes/company.js'));
app.use('/api/seller', require('././server/routes/company.js'));
app.use('/api/userevent', require('././server/routes/userevent.js'));
app.use('/api/message', require('././server/routes/messages.js'));

// app.post("/api/user", (req, res) => {
//   console.log(req.body);
//   pet.findAndChange(req.body).then((obj) => {
//     nodemailer.createTestAccount((err, email) => {
//       var transporter = nodemailer.createTransport(
//         smtpTransport({
//           service: "gmail",
//           port: 465,
//           secure: false,
//           host: "smtp.gmail.com",
//           auth: {
//             user: "allinclusivenoabo@gmail.com",
//             pass: "noabo123456789",
//           },
//           tls: {
//             rejectUnauthorized: false,
//           },
//         })
//       );

//       let mailOptions = {
//         from: "allinclusivenoabo@gmail.com",
//         to: `${req.body.email}`,
//         subject: "register",
//         text: `We thank you for ${req.body.firstName}.`,
//       };
//       transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//           console.log(err);
//         }
//         res.send(info);
//       });
//     });

//   });
// });


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);

});

