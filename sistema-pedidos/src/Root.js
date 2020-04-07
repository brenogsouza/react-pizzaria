import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from './store';
import App from './App';

function Root() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Route component={App} />
          <CssBaseline />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default Root;
