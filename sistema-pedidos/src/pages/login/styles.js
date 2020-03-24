import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
  padding: 50px;

  img {
    width: 100%;
  }

`;

export const GithubButton = styled(Button).attrs({
  fullWidth: true,
  variant: 'contained',
})`
  &&.MuiButton-root{
    font-size: 20px;
    padding: 15px;
    text-transform: none;
  }
`;
