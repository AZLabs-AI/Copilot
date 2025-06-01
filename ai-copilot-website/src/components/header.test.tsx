import { render, screen } from '@testing-library/react';
import Header from './header'; // Adjust path as necessary

describe('Header Component', () => {
  it('renders successfully', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // <header> is a banner landmark
  });

  it('displays the logo text "AI Copilot"', () => {
    render(<Header />);
    expect(screen.getByText('AI Copilot')).toBeInTheDocument();
  });

  it('contains navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
