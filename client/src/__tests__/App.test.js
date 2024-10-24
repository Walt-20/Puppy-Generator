// src/__tests__/App.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders the app with a header and PuppyImage component', () => {
  render(<App />)
  
  // Check if the header is rendered
  const headerElement = screen.getByText(/Cute Puppy App/i)
  expect(headerElement).toBeInTheDocument()

  // Check if the button from PuppyImage component is present
  const buttonElement = screen.getByRole('button', { name: /Click For Cute Puppy/i })
  expect(buttonElement).toBeInTheDocument()
})
