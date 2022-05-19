import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "App.js"

test('renders without crashing', () => {
    const { getByText } = render(<App />)
    const title = getByText(/Última Búsqueda/i)
    expect(title).toBeInTheDocument()
})

test('searh from could be used', async () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    fireEvent.change(input, { target: { value: 'avengers'} })
    fireEvent.click(button)
    
    const title = await screen.findByText('avengers')
    expect(title).toBeVisible()
})