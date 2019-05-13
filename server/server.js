let express = require('express'),
    bodyParser = require('body-parser')
    wellknown = require('nodemailer-wellknown'),
    nodemailer = require('nodemailer')
    app = express(),
    port = 5000

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    app.get('/page/contact',(req,res)=>{
        res.send('Hello')
    })
    app.post('/page/contact',(req,res)=>{
        let {name,email,phone,message} = req.body


        let mailOptions = {
            from: `<starsandstripes215@outlook.com>`,
            to: 'starsandstripes215@outlook.com',
            subject: 'New message from stars&stripes website',
            text: `${message}`, 
            html: `<b>Name:${name}</b><br>${message}`
        };
        

        let transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "1d504e5dcea2eb",
              pass: "96e3ebe2d5d96f"
            }
          });

      
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
          });
       
    })

    app.listen(port,()=>console.log(`Server is running on port ${port} `))