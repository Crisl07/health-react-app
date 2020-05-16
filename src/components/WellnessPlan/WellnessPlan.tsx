import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Add from '@material-ui/icons/AddBox';
import { useStyles } from './WellnessPlanStyles';
import { useParams } from 'react-router';
import { WellnessPlanProps } from '../../types/components/TypeWellnessPlan';
import {
  getSicknessWellnessActivities,
  addUserWellnessActivity,
} from '../../api/wellnessPlan';

export default function WellnessPlan() {
  const classes = useStyles();
  const { id } = useParams();
  const [wellnessActivities, setWellnessActivities] = useState<
    WellnessPlanProps[]
  >([]);
  const [hasWellnessActivities, setHasWellnessActivities] = useState<boolean>(
    true,
  );

  const addFavorite = async (id: string) => {
    try {
      await addUserWellnessActivity(id);
    } catch (error) {}
  };

  useEffect(() => {
    if (hasWellnessActivities) {
      if (wellnessActivities.length === 0) {
        getSicknessWellnessActivities(id!).then(
          (wellnessActivities: WellnessPlanProps[]) => {
            if (wellnessActivities && wellnessActivities.length > 0) {
              setWellnessActivities(wellnessActivities);
              setHasWellnessActivities(false);
            } else {
              setHasWellnessActivities(false);
            }
          },
        );
      }
    }
  }, [wellnessActivities, hasWellnessActivities, id]);

  return (
    <React.Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="xl">
          <Typography
            className={classes.typography}
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Wellness Activities{' '}
            <FitnessCenter className={classes.fitnessIcon} />
          </Typography>
        </Container>
      </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Times Per Week</TableCell>
            <TableCell>Set Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wellnessActivities.map((activity: WellnessPlanProps, i: number) => (
            <TableRow key={i}>
              <TableCell>{activity.name}</TableCell>
              <TableCell>{activity.description}</TableCell>
              <TableCell>{activity.duration}</TableCell>
              <TableCell>{activity.timesPerWeek}</TableCell>
              <TableCell>
                <Button onClick={() => addFavorite(activity.id)}>
                  <Add />
                  Add Favorite
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
