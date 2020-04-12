import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Healing from "@material-ui/icons/Healing";
import { useStyles } from "./MedicHistoryStyles";
import { getUserMedicHistories } from "../../api/medicHistory";
import { MedicHistoryProps } from '../../types/components/TypeMedicHistoryProps';

export default function MedicHistory() {
  const classes = useStyles();
  const [medicHistories, setMedicHistories] = useState<MedicHistoryProps[]>([]);
  const [hasMedicHistories, setHasMedicHistories] = useState<boolean>(true);

  useEffect(() => {
    if (hasMedicHistories) {
      if (medicHistories.length === 0) {
        getUserMedicHistories()
          .then((medicHistories: MedicHistoryProps[]) => {
            if (medicHistories && medicHistories.length > 0) {
              setMedicHistories(medicHistories);
              setHasMedicHistories(false);
            } else {
              setHasMedicHistories(false);
            }
          })
      }
    }
  }, [medicHistories, hasMedicHistories])

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="xl">
          <Typography className={classes.typography} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Medic History <Healing className={classes.fitnessIcon} />
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
          {medicHistories.map((medicHistory: any) => (
            <TableRow key={medicHistory.id}>
              <TableCell>{medicHistory.medicalAppointmentDate}</TableCell>
              <TableCell>{medicHistory.sickness.name}</TableCell>
              <TableCell>{medicHistory.doctor.name}</TableCell>
              <TableCell>{medicHistory.doctor.medicalSpecialty}</TableCell>
              <TableCell>{medicHistory.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}