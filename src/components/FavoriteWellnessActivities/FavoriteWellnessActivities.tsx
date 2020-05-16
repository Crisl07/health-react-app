import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Star from '@material-ui/icons/Star';
import { useStyles } from './FavoriteWellnessActivitiesStyles';
import { WellnessPlanProps } from '../../types/components/WellnessPlan';
import {
  getUserWellnessActivities,
  deleteUserWellnessActivity,
} from '../../api/wellnessPlan';

export default function FavoriteWellnessActivities() {
  const classes = useStyles();
  const [favoriteWellnessActivities, setFavoriteWellnessActivities] = useState<
    WellnessPlanProps[]
  >([]);
  const [hasWellnessActivities, setHasWellnessActivities] = useState<boolean>(
    true,
  );

  const deleteFavoriteWellnessActivity = async (id: string) => {
    try {
      await deleteUserWellnessActivity(id);
      const newFavoriteWellnessActivities = favoriteWellnessActivities.filter(
        (activity: WellnessPlanProps) => activity.id !== id,
      );
      setFavoriteWellnessActivities(newFavoriteWellnessActivities);
    } catch (error) { }
  };

  useEffect(() => {
    if (hasWellnessActivities) {
      if (favoriteWellnessActivities.length === 0) {
        getUserWellnessActivities().then(
          (favoriteWellnessActivities: WellnessPlanProps[]) => {
            if (
              favoriteWellnessActivities &&
              favoriteWellnessActivities.length > 0
            ) {
              setFavoriteWellnessActivities(favoriteWellnessActivities);
              setHasWellnessActivities(false);
            } else {
              setHasWellnessActivities(false);
            }
          },
        );
      }
    }
  });

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
            My Wellness Activities{' '}
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
            <TableCell align="right">Set Favorite</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favoriteWellnessActivities.map((activity: WellnessPlanProps) => (
            <TableRow key={activity.id}>
              <TableCell>{activity.name}</TableCell>
              <TableCell>{activity.description}</TableCell>
              <TableCell>{activity.duration}</TableCell>
              <TableCell>{activity.timesPerWeek}</TableCell>
              <TableCell align="right">
                <Star
                  onClick={() => deleteFavoriteWellnessActivity(activity.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
