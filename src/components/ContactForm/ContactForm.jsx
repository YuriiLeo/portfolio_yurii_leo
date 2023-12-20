import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Item } from './ContactForm.styled';

export const ContactUs = () => {
  const form = useRef();
  const [isError, setIsError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.user_email.value;
    const name = form.current.user_name.value;
    const message = form.current.message.value;

    if (!email || !name || !message || !validateEmail(email)) {
      setIsError(true);
      return;
    }

    emailjs
      .sendForm('service_a3qdu8s', 'template_l2nue7s', form.current, 's4VxUqLBmOTHX4siE')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <Item>
        <Form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Your Name" />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="yourMail@mail.com" />
          <label>Message</label>
          <textarea name="message" placeholder="Hi..." />
          {isError && <p>Please fill in all fields and provide a valid email address.</p>}
          {isSent && <p>Message sent successfully!</p>}
          <button type="submit">Send</button>
        </Form>

      </Item>
    </>
  );
};

