import React, { useState } from 'react';

import { validateEmail,capitalizeFirstLetter } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section id="contact">
      <h2 data-testid="h1tag"><i>Contact</i></h2>
      <hr/>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className ="form-field" className ="mx-2">
          <label htmlFor="name">Name  </label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <br/>
        <div className ="form-field" className ="mx-2">
          <label htmlFor="email">Email  </label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className ="form-field" className ="mx-2">
          <label htmlFor="message">Message</label>
  
          <textarea name="message" rows="2" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div className ="form-field" className ="mx-2">
            <p  className="error-text">{capitalizeFirstLetter(errorMessage)}</p>
          </div>
        )}
        <button  className ="mx-2" data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;