import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import GoogleLogin from 'react-google-login';
import { makeStyles } from '@material-ui/core';

import { GOOGLE_CLIENT_ID } from '../../../config';
import { loginWithGoogle } from '../../../Services/auth';
import { AuthContext } from '../../../Store/auth';

const useStyles = makeStyles((theme) => ({
  rowButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '100%',
    maxWidth: 300,
    height: 40,
    backgroundColor: theme.palette.info.main,
    cursor: 'pointer',
    margin: 'auto',
    verticalAlign: 'middle',
    boxShadow: '1px 2px 5px #777',
    transitionDuration: 200,

    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '2px 4px 7px #777',
    },

    '&:active': {
      backgroundColor: theme.palette.info.dark,
    },
  },
  center: {
    paddingRight: 5,
    color: 'white',
    display: 'inlineBlock',
  },
}))

const GoogleLoginButton = () => {
  const classes = useStyles();
  const { setAuthState } = useContext(AuthContext);

  const handleGoogleSignIn = async (googleUser) => {
    try {
      const email = googleUser.getBasicProfile().getEmail();
      const uid = googleUser.getBasicProfile().getId();
      const idToken = googleUser.getAuthResponse().id_token;

      const data = await loginWithGoogle({
        email,
        uid,
        idToken,
      });

      const { token, expiresAt, userInfo } = data;
      setAuthState({ token, expiresAt, userInfo });
    } catch (error) {
      // 
    }
  }

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      onSuccess={handleGoogleSignIn}
      cookiePolicy={'single_host_origin'}
      render={(renderProps) => (
        <div
          className={classes.rowButton}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <div className={classes.center}>Sign in with Google</div>
          <FcGoogle size={25} />
        </div>
      )}
    />
  )
}

export default GoogleLoginButton
