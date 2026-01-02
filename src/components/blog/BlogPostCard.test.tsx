import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BlogPostCard from './BlogPostCard';
import { BlogPostMetadata } from '@/types/blog';

describe('BlogPostCard', () => {
  const mockPost: BlogPostMetadata = {
    slug: 'test-post',
    frontmatter: {
      title: 'Test Blog Post',
      description: 'This is a test description',
      date: '2024-01-15',
      tags: ['React', 'TypeScript'],
      author: 'Test Author',
      published: true,
    },
    readingTime: '5 min read',
  };

  it('renders post title', () => {
    render(<BlogPostCard post={mockPost} index={0} />);

    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
  });

  it('renders formatted date', () => {
    render(<BlogPostCard post={mockPost} index={0} />);

    expect(screen.getByText('January 15, 2024')).toBeInTheDocument();
  });

  it('renders reading time', () => {
    render(<BlogPostCard post={mockPost} index={0} />);

    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  it('has correct link to blog post', () => {
    render(<BlogPostCard post={mockPost} index={0} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/blog/test-post');
  });

  it('applies correct styling classes', () => {
    const { container } = render(<BlogPostCard post={mockPost} index={0} />);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('border-b', 'border-white/10', 'pb-6', 'mb-6');
  });

  it('applies monospace font to title', () => {
    render(<BlogPostCard post={mockPost} index={0} />);

    const title = screen.getByText('Test Blog Post');
    expect(title).toHaveClass('font-mono');
  });
});
