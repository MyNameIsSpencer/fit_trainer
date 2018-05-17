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

app.use(cors());
app.use(express.json());

app.post('/api/mail', (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'daisyluemailsyou@gmail.com',
      pass: 'daisylupassword'
    }
  });

  const mailOptions = {
    from: 'daisyluemailsyou@gmail.com',
    to: 'biologicfitnessandhealth@gmail.com',
    subject: 'Interest in Fitness and Health',
    text: `Hi, my name is ${req.body.name},\n\n
      My email is: ${req.body.email} \n\n
      My phone number is: ${req.body.phone} \n\n
      I want to: ${req.body.goal} \n\n
      I want plan: ${req.body.plan} \n\n
      Message:
      ${req.body.message}`
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
