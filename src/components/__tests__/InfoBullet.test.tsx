import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InfoBullet from '../InfoBullet';

describe('InfoBullet', () => {
  it('renders text and highlight without logo', () => {
    const item = {
      text: 'Software Engineer at ',
      highlight: 'TechCorp',
    };

    render(<InfoBullet item={item} index={0} />);

    expect(screen.getByText('Software Engineer at')).toBeInTheDocument();
    expect(screen.getByText('TechCorp')).toBeInTheDocument();
  });

  it('renders with logo when provided', () => {
    const item = {
      text: 'Developer at ',
      highlight: 'Company',
      logo: '/logo.png',
    };

    render(<InfoBullet item={item} index={0} />);

    expect(screen.getByText('Developer at')).toBeInTheDocument();
    const logo = screen.getByAltText('Company');
    expect(logo).toBeInTheDocument();
  });

  it('renders with link when provided', () => {
    const item = {
      text: 'Working at ',
      highlight: 'Example Corp',
      logo: '/logo.png',
      link: 'https://example.com',
    };

    render(<InfoBullet item={item} index={0} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('renders nested sub-items when provided', () => {
    const item = {
      text: 'Consultant at ',
      highlight: 'Agency',
      subItems: [
        {
          highlight: 'Client A',
          description: 'Built web app',
        },
        {
          highlight: 'Client B',
          logo: '/client-b.png',
          description: 'Mobile development',
        },
      ],
    };

    render(<InfoBullet item={item} index={0} />);

    expect(screen.getByText('Consultant at')).toBeInTheDocument();
    expect(screen.getByText('Client A')).toBeInTheDocument();
    expect(screen.getByText('- Built web app')).toBeInTheDocument();
    expect(screen.getByText('Client B')).toBeInTheDocument();
    expect(screen.getByText('- Mobile development')).toBeInTheDocument();
  });

  it('does not render sub-items section when no subItems provided', () => {
    const item = {
      text: 'Engineer at ',
      highlight: 'Company',
    };

    const { container } = render(<InfoBullet item={item} index={0} />);

    // Check that nested structure doesn't exist
    const nestedContainer = container.querySelector('.ml-6');
    expect(nestedContainer).not.toBeInTheDocument();
  });

  it('renders bullet point symbol', () => {
    const item = {
      text: 'Test ',
      highlight: 'Item',
    };

    render(<InfoBullet item={item} index={0} />);

    expect(screen.getByText('•')).toBeInTheDocument();
  });

  it('renders corner symbol for nested items', () => {
    const item = {
      text: 'Main ',
      highlight: 'Item',
      subItems: [
        {
          highlight: 'Sub Item',
        },
      ],
    };

    render(<InfoBullet item={item} index={0} />);

    expect(screen.getByText('└')).toBeInTheDocument();
  });
});
