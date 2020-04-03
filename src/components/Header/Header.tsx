import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useStyles } from "./HeaderStyles";
import { useHistory } from "react-router-dom";

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  const handleChangeRoutes = (route: string) => {
    history.push(route)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" onClick={() => handleChangeRoutes('/sicknesses')} className={classes.link}>
              Sicknesses
            </Link>
            <Link variant="button" color="textPrimary" onClick={() => handleChangeRoutes('/medicHistory')} className={classes.link}>
              Medic History
            </Link>
            <Link variant="button" color="textPrimary" onClick={() => handleChangeRoutes('/myWellnessActivities')} className={classes.link}>
              My Wellness Activities
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link}>
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}