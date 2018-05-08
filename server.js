const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/mail', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'daisyluemailsyou@gmail.com',
      pass: 'daisylupassword'
    }
  });

  const mailOptions = {
    from: 'daisyluemailsyou@gmail.com',
    to: 'mynameisspencerk@gmail.com',
    subject: 'Interest in Fitness and Health',
    text: 'Hellllllooooooo Everybody!!!!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});



app.listen(port, () => console.log(`Listening on port ${port}`));
