import { render, screen } from '@testing-library/react';
import Footer from './footer'; // Adjust path as necessary

describe('Footer Component', () => {
  it('renders successfully', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // <footer> is a contentinfo landmark
  });

  it('displays the copyright text', () => {
    render(<Footer />);
    // Check for part of the copyright string, as the year might change
    expect(screen.getByText(/© \d{4} AI Copilot. All rights reserved./i)).toBeInTheDocument();
  });

  it('contains quick links', () => {
    render(<Footer />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('contains social media links placeholders', () => {
    render(<Footer />);
    expect(screen.getByText('X')).toBeInTheDocument(); // Placeholder for X icon/link
    expect(screen.getByText('LinkedIn')).toBeInTheDocument(); // Placeholder for LinkedIn icon/link
    expect(screen.getByText('GitHub')).toBeInTheDocument(); // Placeholder for GitHub icon/link
  });
});
