import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LocalHospital from '@material-ui/icons/LocalHospital';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './SicknessesStyles';
import { SicknessProps } from '../../types/components/TypeSicknessProps';
import { getUserSicknesses, deleteUserSickness } from '../../api/sicknesses';
import { CardSickness } from '../CardSickness/CardSickness';
import { history } from '../../App';

export default function Sicknesses() {
  const classes = useStyles();
  const [hasSicknesses, setHasSicknesses] = useState<boolean>(true);
  const [sicknesses, setSicknesses] = useState<SicknessProps[]>([]);
  const [filteredSicknesses, setFilteredSicknesses] = useState<SicknessProps[]>(
    [],
  );
  const [sicknessToSearch, setSicknessToSearch] = useState<string>('');

  const handleDeleteSickness = async (id: string) => {
    try {
      await deleteUserSickness(id);
      const newUserSicknesses = sicknesses.filter(
        (sickness: SicknessProps) => sickness.id !== id,
      );
      setSicknesses(newUserSicknesses);
    } catch (error) {}
  };

  const handleSicknessFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSicknessToSearch(e.target.value);
  };

  useEffect(() => {
    if (hasSicknesses) {
      getUserSicknesses().then((sicknesses: SicknessProps[]) => {
        if (sicknesses && sicknesses.length > 0) {
          setSicknesses(sicknesses);
          setHasSicknesses(false);
        } else {
          setHasSicknesses(false);
        }
      });
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
              Your Sicknesses
              <LocalHospital className={classes.hospitalIcon} />
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Button
            onClick={() => history.push('/allSicknesses')}
            className={classes.addbutton}
            size="medium"
            color="secondary"
          >
            Add a sickness
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
            {filteredSicknesses.map((sickness: SicknessProps, i: number) => (
              <CardSickness
                key={sickness.id}
                id={sickness.id}
                name={sickness.name}
                img={sickness.img}
                scientificNotation={sickness.scientificNotation}
                description={sickness.description}
                deleteSickness={handleDeleteSickness}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
