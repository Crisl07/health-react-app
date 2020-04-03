import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: "#323232",
    color: "white",
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  typography: {
    color: "white"
  },
  searchInput: {
    textAlign: "center"
  },
  hospitalIcon: {
    fontSize: 30
  }
}));