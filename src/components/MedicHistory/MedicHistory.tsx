import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useStyles } from "./MedicHistoryStyles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Healing from "@material-ui/icons/Healing";

export default function MedicHistory() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Typography className={classes.typography} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Medical History <Healing className={classes.fitnessIcon}/>
            </Typography>
          </Container>
        </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Sickness Name</TableCell>
            <TableCell>Doctor Name</TableCell>
            <TableCell>Medical Specialty</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* ApiCall */}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}