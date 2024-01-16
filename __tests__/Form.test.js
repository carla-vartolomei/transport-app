import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Form from '../components/contact-page/form/Form'

describe('Contact Form', () => {
  it('render contact form', () => {
    render(<Form />)
 
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();

    const firstName = screen.getByRole('textbox', { name: 'First Name' });
    expect(firstName).toBeInTheDocument();

    const lastName = screen.getByRole('textbox', { name: 'Last Name' });
    expect(lastName).toBeInTheDocument();

    const email = screen.getByRole('textbox', { name: 'E-mail' });
    expect(email).toBeInTheDocument();

    const message = screen.getByRole('textbox', { name: 'Your message' });
    expect(message).toBeInTheDocument();

    const submitBtn = screen.getByRole('button', { name: 'submit' });
    expect(submitBtn).toBeInTheDocument();

  })
})