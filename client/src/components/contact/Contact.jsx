import { useState } from 'react';
import './Contact.scss';
import { Col, Row, Form, Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = (event) => {
    event.preventDefault();
    setShow(false);
    window.location.reload();
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShow(true);
    }

    setValidated(true);
  }

  return (
    <div className='contact'>
      <div className='contact-banner'>
        <h1>Contact Us</h1>
      </div>

      <Row className='contact-links'>
        <div className='links-header'>
          <h4>Links</h4>
        </div>
        <Col className='contact-link'>
          <Button size="large" variant='contained' startIcon={<EmailIcon />} href="mailto:quantoptech@gmail.com" >
            <h6>Email</h6>
          </Button>
        </Col>
        <Col className='contact-link'>
          <Button size="large" variant="contained" startIcon={<GitHubIcon />} href="https://github.com/Quantop" target="_blank" >
            <h6>GitHub</h6>
          </Button>
        </Col>
        <Col className='contact-link'>
          <Button size="large" variant="contained" startIcon={<TwitterIcon />} href="https://twitter.com/QuantopTech" target="_blank" >
            <h6>Twitter</h6>
          </Button>
        </Col>
      </Row>

      <div className='contact-form'>
        <div className='form-header'>
          <h4>Contact Form</h4>
          <p>Get in contact with us using the form below!</p>
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              placeholder="Email" 
              required
            />
            <Form.Control.Feedback type="invalid">
              Please use a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows="3"
              required
            />
            <Form.Control.Feedback type="valid">
              Thank you for your message!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              A message is required.
            </Form.Control.Feedback>
          </Form.Group>

          <div className='button-container'>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <span><CheckCircleIcon sx={{ color: "green", fontSize: 90 }} /></span>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We have received your message and will get back to you as soon as we can.</Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
