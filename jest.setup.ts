import '@testing-library/jest-dom';
import { act } from 'react';

// Fix React 19 compatibility with @testing-library/react
// The issue: @testing-library/react@16.3.0 expects React.act to be available
// on the React object, but React 19 exports act as a standalone function

// Solution: Polyfill React.act for testing library compatibility
const React = require('react');

// Ensure React.act is available for @testing-library/react
if (!React.act) {
  React.act = act;
}

// Also attach to the default export
if (React.default && !React.default.act) {
  React.default.act = act;
}

// Set the React testing environment flag
(global as any).IS_REACT_ACT_ENVIRONMENT = true;

// Ensure act is available globally for testing
(global as any).act = act;