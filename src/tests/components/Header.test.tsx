import Header from '@components/Header';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Header component', () => {
  it('renders the header', () => {
    render(<Header />);
    expect(
      screen
        .getByRole('link', { name: 'Animal Crossing API' })
        .getAttribute('href'),
    ).toBe('/');
  });

  it('all nav links point to correct URLs', () => {
    render(<Header />);
    expect(
      screen.getByRole('link', { name: 'About' }).getAttribute('href'),
    ).toBe('/about');
    expect(
      screen.getByRole('link', { name: 'Docs' }).getAttribute('href'),
    ).toBe('/docs');
  });
});
