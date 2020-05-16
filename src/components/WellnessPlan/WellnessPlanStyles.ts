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
  fitnessIcon: {
    fontSize: 50,
  },
}));
