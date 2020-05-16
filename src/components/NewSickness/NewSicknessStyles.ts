import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: '#323232',
    color: 'white',
    padding: theme.spacing(8, 0, 6),
  },
  typography: {
    color: 'white',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.dark,
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
