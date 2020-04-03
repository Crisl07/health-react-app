import React, { memo } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { SicknessProps } from "../../models/TypeSicknessProps";
import { useStyles } from "./CardSicknessStyles";
import ReadMoreReact from 'read-more-react';
import { useHistory } from "react-router-dom";

export const CardSickness = memo(({
  name,
  img,
  desc,
  scientificNotation,
  id
}: SicknessProps): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const goToWellnessPlan = (name: string) => {
    history.push(`/sicknesses/wellnessplan/${name}`);
  }

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
          <Typography>
            {scientificNotation}
          </Typography>
          <Typography component={'span'} variant={'body2'}>
              <ReadMoreReact
                text={desc}
                min={20}
                ideal={50}
                max={70}
                readMoreText="...Read More"
                className={classes.readMore}
              />
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => { goToWellnessPlan(name) }} size="small" color="secondary">
            Wellness Plan
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
});
