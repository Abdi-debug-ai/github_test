// netlify/functions/contact.js
exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
        const data = JSON.parse(event.body);
        // Here you can process the incoming data (e.g., save it to a database or send an email)
        console.log(data);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Form submitted successfully!', data }),
        };
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
};
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
    const { name, email, message } = JSON.parse(event.body);

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Your email
            pass: 'your-email-password', // Your email password or App password
        },
    });

    const mailOptions = {
        from: email,
        to: 'abdihalimnasir@gmail.com', // Your recipient email
        subject: `Contact Form Submission from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to send email', error }),
        };
    }
};
import React, { useState } from 'react';

const PizzaOrderForm = () => {
  const [order, setOrder] = useState('');

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic (like sending the data to your backend or logging it)
    console.log("Order submitted:", order);
  };

  return (
    <form
      data-netlify="true"
      name="pizzaOrder"
      method="post"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="pizzaOrder" />
      <label>
        What order did the pizza give to the pineapple?
        <input name="order" type="text" value={order} onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default PizzaOrderForm;
import React from 'react';
import PizzaOrderForm from './PizzaOrderForm'; // Adjust the path as necessary

const App = () => {
  return (
    <div>
      <h1>Welcome to Our Pizza Shop!</h1>
      <PizzaOrderForm />
    </div>
  );
};

export default App;
