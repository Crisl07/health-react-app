import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  wellnessPlanButton: {
    margin: theme.spacing(1),
  },
  readMore: {
    color: 'blue',
  },
  button: {
    alignContent: 'center',
  },
}));
