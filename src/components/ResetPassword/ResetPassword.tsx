import React, { useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NewPasswordProps } from "../../types/components/NewPasswordProps";
import { useLocation } from 'react-router';
import { useStyles } from './ResetPasswordStyles';
import { resetPassword } from '../../api/auth';
import { toast } from 'react-toastify';
import { history } from '../../App';

export function ResetPassword() {
  const classes = useStyles();
  const location = useLocation();
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirm = useRef<HTMLInputElement>(null);

  const confirmNewPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.current!.value !== passwordConfirm.current!.value) {
      return toast.error('Passwords do not match');
    }
    let token = location.search.split('=')[1];
    const newPasswordProps: NewPasswordProps = {
      token,
      newPassword: password.current!.value,
      verifyPassword: passwordConfirm.current!.value,
    };
    try {
      await resetPassword(newPasswordProps);
    } catch (error) {
    } finally {
      history.push('/signin');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h6" className={classes.typography}>
          Please enter your new password
        </Typography>
        <form className={classes.form} noValidate onSubmit={confirmNewPassword}>
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
          <Typography
            component="h1"
            variant="h6"
            className={classes.typography}
          >
            Please enter your new password again
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="current-password"
            inputRef={passwordConfirm}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Confirm new password
          </Button>
        </form>
      </div>
    </Container>
  );
}
