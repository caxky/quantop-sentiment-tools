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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <div className='button-container'>
            <Button variant="contained" type="button" onClick={handleShow}>
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
