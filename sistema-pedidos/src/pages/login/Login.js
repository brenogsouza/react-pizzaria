import React from 'react';
import {
  Button, Grid, Divider, Typography, TextField, Checkbox,
} from '@material-ui/core';
import { Logo } from '../../images';

import { Container } from './styles';

// import { Container } from './styles';

const Login = () => (
  <Container>
    <Grid container spacing={10} direction="column" alignItems="center">
      <Grid item xs={12}>
        <img src={Logo} alt="Logo" />
      </Grid>
      <Grid item xs={12}>
        <Button>Entrar com github</Button>
      </Grid>
      <Divider orientation="horizontal" />
      <Grid item xs={12}>
        <Typography>ou</Typography>
      </Grid>
      <Divider orientation="horizontal" />
      <Grid item xs={12}>
        <TextField variant="outlined" label="E-mail" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField variant="outlined" label="Senha" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <Checkbox />
      </Grid>
      <Grid item xs={6}>
        <Button>Entrar</Button>
      </Grid>
    </Grid>
  </Container>
);

export default Login;
