import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LogoText from '../LogoText';

describe('LogoText', () => {
  it('renders text and logo', () => {
    render(<LogoText logo="/test-logo.png" text="Test Company" />);

    expect(screen.getByText('Test Company')).toBeInTheDocument();
    const logo = screen.getByAltText('Test Company');
    expect(logo).toBeInTheDocument();
  });

  it('renders as a link when link prop is provided', () => {
    render(
      <LogoText logo="/test-logo.png" text="Test Company" link="https://example.com" />
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders as span when no link is provided', () => {
    const { container } = render(<LogoText logo="/test-logo.png" text="Test Company" />);

    const link = screen.queryByRole('link');
    expect(link).not.toBeInTheDocument();

    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<LogoText logo="/test-logo.png" text="Test Company" />);

    const span = container.querySelector('span');
    expect(span).toHaveClass('inline-flex', 'items-center', 'font-semibold');
  });

  it('logo has correct dimensions', () => {
    render(<LogoText logo="/test-logo.png" text="Test Company" />);

    const logo = screen.getByAltText('Test Company');
    expect(logo).toHaveAttribute('width', '16');
    expect(logo).toHaveAttribute('height', '16');
  });
});
