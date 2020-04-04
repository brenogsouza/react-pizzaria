import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Routes } from './configs';

function Root() {
  return (
    <div>
      <Routes />
      <CssBaseline />
    </div>
  );
}

export default Root;
