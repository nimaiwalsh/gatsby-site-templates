import React from 'react'
import { FormContainer, FormGroup } from './ContactForm.css'

const ContactForm = () => {
  return (
    <FormContainer>
      <FormGroup>
        <input type="text" className="form__input" placeholder="Full name" id="name" required />
        <label for="name" className="form__label">Name</label>
      </FormGroup>
      <FormGroup>
        <input type="email" className="form__input" placeholder="Email address" id="email" required />
        <label for="email" className="form__label">Name</label>
      </FormGroup>
    </FormContainer>
  )
}

export default ContactForm
