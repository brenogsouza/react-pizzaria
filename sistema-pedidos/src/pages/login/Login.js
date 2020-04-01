import React, { useEffect, useState, useCallback } from 'react';

import { Grid, Button } from '@material-ui/core';
import { Logo } from '../../images';
import { Container, GithubButton } from './styles';
import firebase from '../../services/firebase';


const Login = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logado ', user);
        setIsUserLoggedIn(true);
        setIsUser(user);
      } else {
        console.log('usuario nao esta logado ');
        setIsUserLoggedIn(false);
        setIsUser(null);
      }
    });
  }, []);

  const handleLogin = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  const handleLogout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setIsUserLoggedIn(false);
      setIsUser(null);
    });
  }, []);


  return (
    <Container>
      <Grid container spacing={10} justify="center">
        <Grid item container justify="center" xs={12}>
          <img src={Logo} alt="Logo" />
        </Grid>
        <Grid item container justify="center" xs={12}>
          {isUserLoggedIn && (
            <>
              <pre>{JSON.stringify(isUser, null, 2)}</pre>
              <Button onClick={handleLogout} variant="contained">Sair</Button>
            </>
          )}
          {!isUserLoggedIn && (
            <GithubButton onClick={handleLogin}>Entrar com Github</GithubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};


export default Login;
