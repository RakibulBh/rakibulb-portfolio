import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import TableOfContents from './TableOfContents';

describe('TableOfContents', () => {
  beforeEach(() => {
    // Mock document.querySelectorAll to return mock headings
    const mockHeadings = [
      { id: 'heading-1', textContent: 'Introduction', tagName: 'H2' },
      { id: 'heading-2', textContent: 'Getting Started', tagName: 'H2' },
      { id: 'heading-3', textContent: 'Advanced Topics', tagName: 'H3' },
    ];

    vi.spyOn(document, 'querySelectorAll').mockReturnValue(
      mockHeadings as any
    );

    // Mock IntersectionObserver
    global.IntersectionObserver = class IntersectionObserver {
      observe = vi.fn();
      disconnect = vi.fn();
      unobserve = vi.fn();
      takeRecords = vi.fn();
      root = null;
      rootMargin = '';
      thresholds = [];

      constructor() {}
    } as any;
  });

  it('renders table of contents with headings', () => {
    render(<TableOfContents />);

    expect(screen.getByText('On this page')).toBeInTheDocument();
    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.getByText('Getting Started')).toBeInTheDocument();
    expect(screen.getByText('Advanced Topics')).toBeInTheDocument();
  });

  it('renders nothing when no headings exist', () => {
    vi.spyOn(document, 'querySelectorAll').mockReturnValue([] as any);

    const { container } = render(<TableOfContents />);

    expect(container.firstChild).toBeNull();
  });

  it('handles click events and scrolls to heading', () => {
    const mockElement = {
      scrollIntoView: vi.fn(),
    };

    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement as any);
    const pushStateSpy = vi.spyOn(window.history, 'pushState');

    render(<TableOfContents />);

    const link = screen.getByText('Introduction');
    fireEvent.click(link);

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
    expect(pushStateSpy).toHaveBeenCalledWith(null, '', '#heading-1');
  });

  it('applies correct indentation for h3 headings', () => {
    render(<TableOfContents />);

    const h3Link = screen.getByText('Advanced Topics');
    expect(h3Link).toHaveClass('ml-4');
  });
});
