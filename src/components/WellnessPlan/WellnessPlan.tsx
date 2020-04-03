import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from "./WellnessPlanStyles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FitnessCenter from "@material-ui/icons/FitnessCenter";

export default function WellnessPlan({ match } : any) {
  console.log(match.params.sickness);
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Typography className={classes.typography} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Wellness Activities <FitnessCenter className={classes.fitnessIcon}/>
            </Typography>
          </Container>
        </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Exercise Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Times Per Week</TableCell>
            <TableCell align="right">Set Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* ApiCall */}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}