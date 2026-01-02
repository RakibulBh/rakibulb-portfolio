import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogSortDropdown from './BlogSortDropdown';

describe('BlogSortDropdown', () => {
  it('renders sort dropdown', () => {
    const onChange = vi.fn();
    render(<BlogSortDropdown value="newest" onChange={onChange} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('displays both sort options', () => {
    const onChange = vi.fn();
    render(<BlogSortDropdown value="newest" onChange={onChange} />);

    expect(screen.getByText('Newest First')).toBeInTheDocument();
    expect(screen.getByText('Oldest First')).toBeInTheDocument();
  });

  it('shows correct selected value', () => {
    const onChange = vi.fn();
    render(<BlogSortDropdown value="newest" onChange={onChange} />);

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('newest');
  });

  it('calls onChange when value changes', () => {
    const onChange = vi.fn();
    render(<BlogSortDropdown value="newest" onChange={onChange} />);

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'oldest' } });

    expect(onChange).toHaveBeenCalledWith('oldest');
  });

  it('applies correct styling classes', () => {
    const onChange = vi.fn();
    render(<BlogSortDropdown value="newest" onChange={onChange} />);

    const select = screen.getByRole('combobox');
    expect(select).toHaveClass('bg-card/50');
    expect(select).toHaveClass('rounded-lg');
  });
});
