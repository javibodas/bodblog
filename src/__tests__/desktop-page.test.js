import DesktopVersion from 'pages/DesktopAppVersion'
import React from 'react';
import { render, screen, cleanup, queries } from '@testing-library/react'
import * as customQueries from 'utils/test-utils.js'
import '@testing-library/jest-dom/extend-expect'

describe('Desktop Page Test', () => {
    afterEach(cleanup)
  
    test('Desktop page renders without crashing', () => {
        render(<DesktopVersion />)
    });

    test('Desktop page unmount without crushing', () => {
        const { unmount } = render(<DesktopVersion />)
        unmount()
    });
});