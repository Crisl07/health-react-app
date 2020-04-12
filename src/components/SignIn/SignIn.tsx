import React, { useRef, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from "./SignInStyles";
import { AppProps } from "../../types/components/TypeAppProps";
import { history } from "../../App";
import { RootState } from '../../types/redux/TypeRootState';
import { Dispatch } from 'redux';
import { logIn } from '../../redux/actions';
import { connect } from 'react-redux';
import { UserProps } from '../../types/components/TypeUserProps';

function SignIn({ isLoggedIn, logIn }: AppProps) {
  const classes = useStyles();
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/sicknesses")
    }
  })

  const SignInUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email: email.current!.value,
      password: password.current!.value
    }
    logIn(user);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={SignInUser}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={() => history.push("/signup")} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logIn: (user: UserProps) => dispatch(logIn(user) as any),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);