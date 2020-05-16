import React, { useRef, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './SignUpStyles';
import { signUp } from '../../api/auth';
import { history } from '../../App';
import { RootState } from '../../types/redux/RootState';
import { Dispatch } from 'redux';
import { logIn } from '../../redux/actions';
import { connect } from 'react-redux';
import { UserProps } from '../../types/components/UserProps';
import { SignUpProps } from '../../types/components/SignUpProps';

function SignUp({ isLoggedIn }: SignUpProps) {
  const classes = useStyles();
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/sicknesses');
    }
  });

  const SignUpUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      name: name.current!.value,
      email: email.current!.value,
      password: password.current!.value,
    };
    try {
      await signUp(newUser);
      history.push('/signin');
    } catch (error) { }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={SignUpUser}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                inputRef={name}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={() => history.push('/signin')} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logIn: (user: UserProps) => dispatch(logIn(user) as any),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
