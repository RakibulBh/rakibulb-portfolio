import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TechnologyBadge from '../TechnologyBadge';
import type { Technology } from '@/data/techstack';

describe('TechnologyBadge', () => {
  it('renders technology name', () => {
    const technology: { img: Technology; name: string } = {
      img: 'react',
      name: 'React',
    };

    render(<TechnologyBadge technology={technology} />);

    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders technology icon with correct alt text', () => {
    const technology: { img: Technology; name: string } = {
      img: 'ts',
      name: 'TypeScript',
    };

    render(<TechnologyBadge technology={technology} />);

    const icon = screen.getByAltText('TypeScript');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', expect.stringContaining('ts.svg'));
  });

  it('applies correct styling classes', () => {
    const technology: { img: Technology; name: string } = {
      img: 'next',
      name: 'Next.js',
    };

    const { container } = render(<TechnologyBadge technology={technology} />);
    const badge = container.firstChild;

    expect(badge).toHaveClass('flex', 'items-center', 'gap-1.5');
  });
});
