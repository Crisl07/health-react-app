import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import LocalHospital from '@material-ui/icons/LocalHospital';
import { SicknessProps } from '../../types/components/SicknessProps';
import { getAllSicknesses, addSicknessToUser } from '../../api/sicknesses';
import { CardSickness } from '../CardSickness/CardSickness';
import { useStyles } from './AllSicknessesStyles';
import { history } from '../../App';

export default function AllSicknesses() {
  const classes = useStyles();
  const [hasSicknesses, setHasSicknesses] = useState<boolean>(true);
  const [sicknesses, setSicknesses] = useState<SicknessProps[]>([]);
  const [filteredSicknesses, setFilteredSicknesses] = useState<SicknessProps[]>(
    [],
  );
  const [sicknessToSearch, setSicknessToSearch] = useState<string>('');

  const handleSicknessFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSicknessToSearch(e.target.value);
  };

  const handleAddSickness = async (id: string) => {
    try {
      await addSicknessToUser(id);
    } catch (error) { }
  };

  useEffect(() => {
    if (hasSicknesses) {
      if (sicknesses.length === 0) {
        getAllSicknesses().then((sicknesses: SicknessProps[]) => {
          if (sicknesses && sicknesses.length > 0) {
            setSicknesses(sicknesses);
            setHasSicknesses(false);
          } else {
            setHasSicknesses(false);
          }
        });
      }
    }
  }, [sicknesses, hasSicknesses]);

  useEffect(() => {
    setFilteredSicknesses(sicknesses);
  }, [sicknesses]);

  useEffect(() => {
    if (sicknessToSearch.length > 0) {
      let newSicknesses = sicknesses.filter((sickness) =>
        sickness.name.toLowerCase().includes(sicknessToSearch.toLowerCase()),
      );
      setFilteredSicknesses(newSicknesses);
    } else {
      setFilteredSicknesses(sicknesses);
    }
  }, [sicknessToSearch, sicknesses]);

  return (
    <React.Fragment>
      <main>
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
              All Sicknesses
              <LocalHospital className={classes.hospitalIcon} />
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Button
            onClick={() => history.push('/sicknesses')}
            className={classes.addbutton}
            size="medium"
            color="secondary"
          >
            Go to your sicknesses
          </Button>
          <Button
            onClick={() => history.push('/createSickness')}
            className={classes.addbutton}
            size="medium"
            color="secondary"
          >
            Add a new discovered sickness
          </Button>
          <div className={classes.searchInput}>
            <TextField
              variant="filled"
              fullWidth
              margin="normal"
              id="sicknessName"
              label="Search Sickness Name"
              name="sicknessName"
              autoComplete="sicknessName"
              color="secondary"
              autoFocus
              value={sicknessToSearch}
              onChange={handleSicknessFilter}
            />
          </div>{' '}
          <br />
          <Grid container spacing={4}>
            {filteredSicknesses.map((sickness: SicknessProps) => (
              <CardSickness
                key={sickness.id}
                id={sickness.id}
                name={sickness.name}
                img={sickness.img}
                scientificNotation={sickness.scientificNotation}
                description={sickness.description}
                AddSickness={handleAddSickness}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
