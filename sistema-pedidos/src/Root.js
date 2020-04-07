import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from 'store';
import App from './App';

function Root() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <App />
          <CssBaseline />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default Root;
