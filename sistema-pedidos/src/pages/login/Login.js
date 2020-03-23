import React from 'react';
import { Button } from '@material-ui/core';
import { Logo } from '../../images';

// import { Container } from './styles';

const Login = () => (
  <div>
    <img src={Logo} alt="Logo" />
    <Button>Entrar com github</Button>
  </div>
);

export default Login;
