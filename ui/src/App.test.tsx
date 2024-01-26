import { render, screen } from '@testing-library/react';
import App from './App';

test('renders logo prompt', () => {
  render(<App />);
  const logoPromptText = screen.getByText(/Click on the Vite and React logos/i);
  expect(logoPromptText).toBeInTheDocument();
});
