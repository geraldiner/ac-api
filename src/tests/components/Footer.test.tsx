import Footer from '@components/Footer';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Footer component', () => {
  it('renders the footer', () => {
    render(<Footer />);
    expect(screen.getByText(/Created by Geraldine/i)).toBeDefined();
  });
});
