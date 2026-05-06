import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  it('renders the hero section and count button', () => {
    render(<App />)

    expect(screen.getByText(/Get started/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Count is 0/i })).toBeInTheDocument()
  })

  it('increments the counter when the button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: /Count is 0/i })
    await user.click(button)

    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeInTheDocument()
  })
})
