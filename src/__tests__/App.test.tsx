import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders text', () => {
  render(<App />);
  const textElement = screen.getByText(/Please press any key among M, C, and Enter and get emoji./i);
  expect(textElement).toBeInTheDocument();
});
