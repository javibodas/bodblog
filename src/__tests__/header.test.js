import Header from 'components/Header'
import React from 'react';
import { render, screen, cleanup, queries } from '@testing-library/react'
import * as customQueries from 'utils/test-utils.js'
import '@testing-library/jest-dom/extend-expect'

describe('Header Test', () => {
  afterEach(cleanup)

  test('Header renders without crashing', () => {
    render(<Header />)
  });

  /*test('Header renders correctly  profile message', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Hola mi nombre es Javier, soy Desarrollador de Software y te doy la bienvenida a mi blog personal.')).
  });*/

  test('Header renders correctly  social icons', () => {
    const { getAllByDataIcon } = render(<Header />, { queries: {...customQueries}})
    expect( getAllByDataIcon('github-alt').length).toBe(1)
    expect( getAllByDataIcon('linkedin').length).toBe(1)
    expect( getAllByDataIcon('twitter').length).toBe(1)
    expect( getAllByDataIcon('envelope').length).toBe(1)
  });

  test('Header renders correctly  social links', () => {
    render(<Header />, { queries: {...customQueries}})
    expect( screen.getByTestId('twitter-link')).toHaveProperty('href','https://twitter.com/BodasJavier')
    expect( screen.getByTestId('linkedin-link')).toHaveProperty('href','https://www.linkedin.com/in/javier-gonz%C3%A1lez-bodas-70a59787/')
    expect( screen.getByTestId('github-link')).toHaveProperty('href','https://github.com/javibodas')
    expect( screen.getByTestId('mail-link')).toHaveProperty('href','mailto:gonzalezbodasjavier@yahoo.es')
  });

  test('Header renders and unmount correctly', () => {
    const { unmount } = render(<Header />)
    unmount()
  });
});