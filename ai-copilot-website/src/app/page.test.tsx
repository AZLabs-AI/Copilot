import { render, screen } from '@testing-library/react';
import HomePage from './page'; // Adjust path as necessary

// Mock FeatureCard component as it's imported in HomePage
jest.mock('@/components/featureCard', () => {
  // eslint-disable-next-line react/display-name
  return ({ iconSrc, title, description }: { iconSrc: string, title: string, description: string }) => (
    <div data-testid="feature-card">
      <img src={iconSrc} alt="icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
    // Check for the hero section, which is the first <section> element
    // A more robust way might be to add a data-testid to the top-level fragment or first section
    expect(screen.getByText(/Supercharge Your Workflow/i).closest('section')).toBeInTheDocument();
  });

  it('renders the hero section headline', () => {
    render(<HomePage />);
    // Check for the presence of the headline text
    // Using a regex to match part of the headline for flexibility
    expect(screen.getByText(/Supercharge Your Workflow/i)).toBeInTheDocument();
  });

  it('renders the key features section title', () => {
    render(<HomePage />);
    // Use a custom text matcher function for elements with children
    expect(screen.getByText((content, element) => {
      const hasText = (node: Element | null) => node?.textContent === "Unlock Powerful Capabilities";
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(
        child => !hasText(child)
      );
      return elementHasText && childrenDontHaveText;
    })).toBeInTheDocument();
  });

  it('renders the call to action section title', () => {
    render(<HomePage />);
    expect(screen.getByText(/Ready to Transform Your Productivity?/i)).toBeInTheDocument();
  });
});
