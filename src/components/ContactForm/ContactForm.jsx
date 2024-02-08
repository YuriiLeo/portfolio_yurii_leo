import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Item } from './ContactForm.styled';

import { useTranslation } from 'react-i18next'

export const ContactUs = () => {
  const form = useRef();
  const { t } = useTranslation();

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
          <label>{t('name')}</label>
          <input type="text" name="user_name" placeholder={t('name-placeholder')} />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="yourMail@mail.com" />
          <label>{t('message')}</label>
          <textarea name="message" placeholder={t('welcome-placeholder')} />
          {isError && <p>{t('is-error-message')}</p>}
          {isSent && <p>{t('is-sent-message')}</p>}
          <button type="submit">{t('contacts-action-btn')}</button>
        </Form>
      </Item>
    </>
  );
};

