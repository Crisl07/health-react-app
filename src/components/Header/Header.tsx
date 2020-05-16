import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import SimpleMenu from '../Menu/Menu';
import { useStyles } from './HeaderStyles';
import { history } from '../../App';

export default function Header() {
  const classes = useStyles();

  const handleChangeRoutes = (route: string) => {
    history.push(route);
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              onClick={() => handleChangeRoutes('/sicknesses')}
              className={classes.link}
            >
              Sicknesses
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              onClick={() => handleChangeRoutes('/allSicknesses')}
              className={classes.link}
            >
              All Sicknesses
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              onClick={() => handleChangeRoutes('/medicHistory')}
              className={classes.link}
            >
              Medic History
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              onClick={() => handleChangeRoutes('/favoriteWellnessActivities')}
              className={classes.link}
            >
              My Wellness Activities
            </Link>
          </nav>
          <SimpleMenu handleChange={handleChangeRoutes} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
