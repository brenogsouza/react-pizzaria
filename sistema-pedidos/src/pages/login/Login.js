import React from 'react';
import { Grid } from '@material-ui/core';
import { Logo } from '../../images';

import { Container, GithubButton } from './styles';

// import { Container } from './styles';

const Login = () => (
  <Container>
    <Grid container spacing={10} justify="center">
      <Grid item container justify="center" xs={12}>
        <img src={Logo} alt="Logo" />
      </Grid>
      <Grid item container justify="center" xs={12}>
        <GithubButton>Entrar com Github</GithubButton>
      </Grid>
    </Grid>
  </Container>
);

export default Login;
