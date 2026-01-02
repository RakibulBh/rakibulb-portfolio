import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogSection from '../sections/BlogSection';
import { BlogPostMetadata } from '@/types/blog';

describe('BlogSection', () => {
  const mockPosts: BlogPostMetadata[] = [
    {
      slug: 'post-1',
      frontmatter: {
        title: 'First Post',
        description: 'First description',
        date: '2024-01-15',
        tags: ['React'],
        author: 'Author 1',
        published: true,
      },
      readingTime: '5 min read',
    },
    {
      slug: 'post-2',
      frontmatter: {
        title: 'Second Post',
        description: 'Second description',
        date: '2024-01-10',
        tags: ['TypeScript'],
        author: 'Author 2',
        published: true,
      },
      readingTime: '3 min read',
    },
  ];

  it('renders section header', () => {
    render(<BlogSection posts={mockPosts} allTags={[]} />);

    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Thoughts on software development, tech trends, and my learning journey'
      )
    ).toBeInTheDocument();
  });

  it('renders all blog posts', () => {
    render(<BlogSection posts={mockPosts} allTags={[]} />);

    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });

  it('filters posts by search query', () => {
    render(<BlogSection posts={mockPosts} allTags={[]} />);

    const searchInput = screen.getByPlaceholderText('Search posts by title...');
    fireEvent.change(searchInput, { target: { value: 'First' } });

    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.queryByText('Second Post')).not.toBeInTheDocument();
  });

  it('sorts posts by date (newest first by default)', () => {
    render(<BlogSection posts={mockPosts} allTags={[]} />);

    const posts = screen.getAllByRole('link');
    expect(posts[0]).toHaveTextContent('First Post'); // 2024-01-15
    expect(posts[1]).toHaveTextContent('Second Post'); // 2024-01-10
  });

  it('shows empty state when no posts match search', () => {
    render(<BlogSection posts={mockPosts} allTags={[]} />);

    const searchInput = screen.getByPlaceholderText('Search posts by title...');
    fireEvent.change(searchInput, { target: { value: 'Nonexistent' } });

    expect(screen.getByText('No posts found')).toBeInTheDocument();
    expect(
      screen.getByText('Try adjusting your filters or search query')
    ).toBeInTheDocument();
  });

  it('renders search input', () => {
    render(<BlogSection posts={mockPosts} allTags={[]} />);

    expect(
      screen.getByPlaceholderText('Search posts by title...')
    ).toBeInTheDocument();
  });

  it('renders sort dropdown', () => {
    render(<BlogSection posts={mockPosts} allTags={[]} />);

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });
});
