import '@testing-library/jest-dom';
import { act } from 'react';

// Fix React 19 compatibility with @testing-library/react
// @testing-library/react@16.3.0 expects React.act to be available
// but React 19 exports act as a standalone function
if (typeof window !== 'undefined') {
  const React = require('react');
  if (!React.act) {
    React.act = act;
  }
}

// Set the React testing environment flag
(global as any).IS_REACT_ACT_ENVIRONMENT = true;