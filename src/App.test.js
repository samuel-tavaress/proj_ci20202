import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UniJuazeiro link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Conheça a UniJuazeiro/i);
  expect(linkElement).toBeInTheDocument();
});
