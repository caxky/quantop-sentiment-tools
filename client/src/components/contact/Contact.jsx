import { useState } from 'react';
import './Contact.scss';
import { Col, Row, Form, Modal } from 'react-bootstrap';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleIcon from '@mui/icons-material/Circle';

import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t, i18n } = useTranslation();

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  const resetForm = () => {
    setFname('');
    setLname('');
    setEmail('');
    setMessage('');
  }


  return (
    <div className='contact'>
      <div className='contact-banner'>
        <h1>{t('Contact Us')}</h1>
      </div>

      <Row className='contact-links'>
        <div className='links-header'>
          <h4>{t('Links')}</h4>
        </div>
        <Col className='contact-link'>
          <Button size="large" variant='contained' startIcon={<EmailIcon />} href="mailto:quantoptech@gmail.com" >
            <h6>{t('Email')}</h6>
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
          <h4>{t('Contact Form')}</h4>
          <p>{t('Get in contact with us using the form below!')}</p>
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>{t('First Name')}</Form.Label>
                <Form.Control 
                  type="text"
                  name="fname"
                  placeholder={t('First Name')}
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {t('Please enter your first name.')}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formLastName">
                <Form.Label>{t('Last Name')}</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder={t('Last Name')}
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {t('Please enter your last name.')}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formEmail">
            <Form.Label>{t('Email')}</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              placeholder={t('Email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid">
              {t('Please use a valid email.')}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>{t('Message')}</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Form.Control.Feedback type="valid">
              {t('Thank you for your message!')}
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {t('A message is required.')}
            </Form.Control.Feedback>
          </Form.Group>

          <div className='button-container'>
            <Button variant="outlined" type="button" onClick={resetForm}>
              {t('Reset')}
            </Button>

            <Button variant="contained" type="submit">
              {t('Submit')}
            </Button>
          </div>
        </Form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <span><CircleIcon sx={{ color: "white", fontSize: 80 }} /></span>
          <span><CheckCircleIcon sx={{ color: "green", fontSize: 90 }} /></span>
          <Modal.Title>{t('Thank you!')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('We have received your message and will get back to you as soon as we can.')}</Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
