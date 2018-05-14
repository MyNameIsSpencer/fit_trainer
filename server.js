const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

{/*}
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
*/}

app.use(cors())

app.post('/api/mail', (req, res) => {
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
    text: 'Come on down to FUnky TOWN!!!!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send(error);
      console.log(error);
    } else {
      res.send ('Email sent: ' + info.response);
      console.log('Email sent: ' + info.response);
    }
  });
});



app.listen(port, () => console.log(`Listening on port ${port}`));
