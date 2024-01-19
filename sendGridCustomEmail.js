import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: ['sumesh9050@gmail.com'],
  from: {
    name:'expenseBook',
    email: process.env.FROM_EMAIL,
  },
  subject: 'expenseBook.ai - expense booking made easier for you',
  text: 'and go anywhere - easy to book anywhere,',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

const sendMail = async () => {
  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

sendMail();



