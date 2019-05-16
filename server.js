const express = require("express");
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');



const PORT = process.env.PORT || 3001;


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/mail", (req, res) => {

  const {name, contact, message} = req.body;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'starsandstripesdriving@gmail.com',
      pass: 'starsandstripes123'
    }
  });

  var mailOptions = {
    from: 'starsandstripesdriving@gmail.com',
    to: 'starsandstripesdriving@gmail.com',
    subject: 'Customer Request',
    text: `
      Hi,

      My name is ${name}

      ${message}

      You can reach me at ${contact}
    `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.json({mailSent: false})
    } else {
      res.json({mailSent: true})
    }
  });

});

app.listen(PORT, console.log(`app listening in port ${PORT}`))
