import React from 'react';
import { render, screen, cleanup, queries } from '@testing-library/react'
import * as customQueries from 'utils/test-utils.js'
import Main from 'pages/Main';

describe('Main Page Test', () => {
  afterEach(cleanup)

  test('Main page renders without crushing', () => {
    render(<Main />);
  });

  test('Main page unmount without crushing', () => {
    const { unmount } = render(<Main />)
    unmount()
  });

  /*test('Main mobile version with little window', () => {
    window.innerWidth = 580;
    const { getAllByClass } = render(<Main />, { queries: {...customQueries}})
    expect( getAllByClass('mobile').length).toBe(1)
    expect( getAllByClass('desktop').length).toBe(0)
  });

  test('Main desktop version with big window', () => {
    
    const { getAllByClass } = render(<Main />, { queries: {...customQueries}})
    expect( getAllByClass('desktop').length).toBe(1)
    //expect( getAllByClass('mobile').length).toBe(0)
  });*/
});
