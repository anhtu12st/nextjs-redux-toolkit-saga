import React from "react";
import { makeStyles } from '@material-ui/core';

import GoogleLoginButton from './GoogleLoginButton';

const useStyles = makeStyles(() => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
}))

const AuthForm = () => {
  const classes = useStyles();
  return <div className={classes.container}><GoogleLoginButton /></div>;
}

export default AuthForm;