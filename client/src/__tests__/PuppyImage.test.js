// src/__tests__/PuppyImage.test.js
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import PuppyImage from '../PuppyImage'

// Mock API response
beforeEach(() => {
  fetch.resetMocks()
})

test('renders the button correctly', () => {
  render(<PuppyImage />)
  
  // Check if the button is rendered
  const buttonElement = screen.getByRole('button', { name: /Click For Cute Puppy/i })
  expect(buttonElement).toBeInTheDocument()
})

test('displays loading state while fetching the image', async () => {
  render(<PuppyImage />)
  
  // Mock the fetch response to simulate loading
  fetch.mockResponseOnce(() => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 100)))
  
  const buttonElement = screen.getByRole('button', { name: /Click For Cute Puppy/i })
  fireEvent.click(buttonElement)

  // Verify that 'Loading...' text is shown after clicking
  expect(screen.getByText(/Loading.../i)).toBeInTheDocument()
})

test('displays the image after a successful API call', async () => {
  const imageUrl = 'https://yqfhqrfjrwwkqeumibpq.supabase.co/storage/v1/object/public/puppies/images/alvan-nee-eoqnr8ikwFE-unsplash.jpg'
  fetch.mockResponseOnce(JSON.stringify({ imageUrl }))

  render(<PuppyImage />)
  
  const buttonElement = screen.getByRole('button', { name: /Click For Cute Puppy/i })
  fireEvent.click(buttonElement)

  // Wait for the image to load and display
  const imageElement = await screen.findByAltText('Cute Puppy')
  expect(imageElement).toHaveAttribute('src', imageUrl)
})

test('handles API error gracefully', async () => {
  fetch.mockRejectOnce(new Error('API is down'))

  render(<PuppyImage />)

  const buttonElement = screen.getByRole('button', { name: /Click For Cute Puppy/i })
  fireEvent.click(buttonElement)

  // Ensure 'Loading...' disappears after failure
  await screen.findByRole('button', { name: /Click For Cute Puppy/i })
})
