import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

function Root() {
  return (
    <div>
      <BrowserRouter>
        <App />
        <CssBaseline />
      </BrowserRouter>
    </div>
  );
}

export default Root;
