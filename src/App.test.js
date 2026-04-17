// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SeiNetwork title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SeiNetwork/i);
    expect(titleElement).toBeInTheDocument();
});
