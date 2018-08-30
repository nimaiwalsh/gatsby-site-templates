import React from 'react'
import { Form, FormGroup, FormRadioGroup, Radio, RadioButton } from './ContactForm.css'
import { FormButton } from './styledComponents'

const ContactForm = () => {
  return (
    <Form>
      <FormGroup>
        <input
          type="text"
          className="form__input"
          placeholder="Full name"
          id="name"
          required
        />
        <label htmlFor="name" className="form__label">
          Name
        </label>
      </FormGroup>
      <FormGroup>
        <input
          type="email"
          className="form__input"
          placeholder="Email address"
          id="email"
          required
        />
        <label htmlFor="email" className="form__label">
          Email
        </label>
      </FormGroup>
      <FormRadioGroup>
        <Radio>
          <input className="radio-input" type="radio" id="small" name="size" />
          <label className="radio-label" htmlFor="small">
            <span className="radio-button" />
            Small tour group
          </label>
        </Radio>
        <Radio>
          <input className="radio-input" type="radio" id="large" name="size" />
          <label className="radio-label" htmlFor="large">
            <span className="radio-button" />
            Large tour groups
          </label>
        </Radio>
      </FormRadioGroup>
      <FormGroup>
        <FormButton green>Submit</FormButton> 
      </FormGroup>
    </Form>
  )
}

export default ContactForm
