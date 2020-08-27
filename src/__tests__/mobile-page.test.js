import MobileVersion from 'pages/MobileAppVersion'
import React from 'react';
import { render, screen, cleanup, queries } from '@testing-library/react'
import * as customQueries from 'utils/test-utils.js'
import '@testing-library/jest-dom/extend-expect'

describe('Mobile Page Test', () => {
    afterEach(cleanup)
  
    test('Mobile page renders without crashing', () => {
        render(<MobileVersion />)
    });

    test('Mobile page unmount without crushing', () => {
        const { unmount } = render(<MobileVersion />)
        unmount()
    });
});