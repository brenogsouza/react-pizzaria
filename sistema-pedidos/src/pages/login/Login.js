import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Grid } from '@material-ui/core';
import { Logo } from '../../images';
import { Container, GithubButton } from './styles';
import { Config } from '../../configs/firebase.config';

firebase.initializeApp(Config);

const Login = () => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logado ', user);
      } else {
        console.log('usuario nao esta logado ');
      }
    });
  }, []);

  const handleAuthentication = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  return (

    <Container>
      <Grid container spacing={10} justify="center">
        <Grid item container justify="center" xs={12}>
          <img src={Logo} alt="Logo" />
        </Grid>
        <Grid item container justify="center" xs={12}>
          <GithubButton onClick={handleAuthentication}>Entrar com Github</GithubButton>
        </Grid>
      </Grid>
    </Container>
  );
};


export default Login;
