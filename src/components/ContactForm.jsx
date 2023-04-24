import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin: 2rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #ff9800;

  cursor: pointer;

  &:hover {
    background-color: #e64a19;
  }
`;

const ContactForm = () => {

  const [popupMessage, setPopupMessage] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate()

  const formatPhone = (event) => {
    let rawNumber = event.target.value.replace(/\D/g, '');
    let formattedNumber = '';
  
    if (event.nativeEvent.inputType === 'deleteContentBackward') {
      rawNumber = rawNumber.slice(0, -1);
    }
  
    if (rawNumber.length > 0) {
      formattedNumber = '(' + rawNumber.slice(0, 3) + ') ';
    }
    if (rawNumber.length >= 4) {
      formattedNumber += rawNumber.slice(3, 6) + '-';
    }
    if (rawNumber.length >= 7) {
      formattedNumber += rawNumber.slice(6, 10);
    }
    setPhone(formattedNumber);
  };
  


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        setPopupMessage('Email sent successfully.');
        e.target.reset()
        setTimeout(() => {
          navigate('/')
        }, 4000);
      }, (error) => {
        setPopupMessage('Failed to send email. Please try again.');
        console.log(error.text);
      });
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Form onSubmit={sendEmail}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder='Enter your name' required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder='Enter your email' required />

        <Label htmlFor="phone">Phone (optional)</Label>
        <Input type="tel" id="phone" name="phone" placeholder='555-555-5555' value={phone} onChange={formatPhone} />

        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" rows="6" placeholder='How can we help you?' required />
        {popupMessage && <p>{popupMessage}</p>}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
