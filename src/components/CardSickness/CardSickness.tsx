import React, { memo, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { useStyles } from './CardSicknessStyles';
import ReadMoreReact from 'read-more-react';
import { history } from '../../App';
import Delete from '@material-ui/icons/Delete';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import Add from '@material-ui/icons/AddBox';
import { CardSicknessProps } from '../../types/components/CardSicknessProps';

export const CardSickness = memo(
  ({
    name,
    img,
    description,
    scientificNotation,
    id,
    deleteSickness,
    AddSickness,
  }: CardSicknessProps): JSX.Element => {
    const classes = useStyles();
    const [currentLocation, setCurrentLocation] = useState<string>('');

    useEffect(() => {
      setCurrentLocation(history.location.pathname);
    }, [currentLocation]);

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={img}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{scientificNotation}</Typography>
            <Typography component={'span'} variant={'body2'}>
              <ReadMoreReact
                text={description}
                min={20}
                ideal={50}
                max={70}
                readMoreText="...Read More"
                className={classes.readMore}
              />
            </Typography>
          </CardContent>
          <CardActions>
            {currentLocation === '/allSicknesses' ? (
              <Button
                onClick={() => {
                  AddSickness!(id!);
                }}
                size="small"
                color="secondary"
                className={classes.wellnessPlanButton}
              >
                <Add />
              </Button>
            ) : (
                <Button
                  onClick={() => deleteSickness!(id!)}
                  size="small"
                  color="secondary"
                  className={classes.wellnessPlanButton}
                >
                  <Delete />
                </Button>
              )}
            <Button
              onClick={() => history.push(`/wellnessPlan/${id!}`)}
              size="small"
              color="secondary"
              className={classes.wellnessPlanButton}
            >
              <FitnessCenter />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  },
);
