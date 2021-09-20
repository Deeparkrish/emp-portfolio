import React,{useState}from 'react';
import { validateEmail } from '../../utils/helpers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../App.css'


function ContactForm(){
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');   

  
  function handleChange(e) {
    // update the name property of formState 
    if (e.target.name === 'email')
    {
      const isValid = validateEmail(e.target.value);
   
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } 
      else 
      {
        if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) 
      {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      }
  
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
}

return (
        <section id ="contact" className ="container">
        <h2 data-testid="h1tag">Contact</h2>
          <Form id="contact-form"  onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="flex-column" >
                <Form.Label>Name</Form.Label>
                <Form.Control type ="name" placeholder={name}onBlur={handleChange} name="name"/>
                </Form.Group>

                <Form.Group   controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder={email} name="email" onBlur={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control type ="message" as="textarea"placeholder={message}  onBlur={handleChange} rows={3} style={{ height: '100px' }} />
                </Form.Group>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <Button data-testid="button" className="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</Button>
          </Form>
        </section>
    );

}

export default ContactForm;