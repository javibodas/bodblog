import Header from '../header'
import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('header contains svg twitter', () => {
  render(<Header />);
  expect(screen.getByRole('button')).toHaveAttribute('className');
});