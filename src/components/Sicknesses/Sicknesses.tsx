import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LocalHospital from "@material-ui/icons/LocalHospital";
import { SicknessProps } from "../../models/TypeSicknessProps";
import { getSicknesses } from "../../api/sicknesses";
import { CardSickness } from "../CardSickness/CardSickness";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useStyles } from "./SicknessesStyles";

export default function Sicknesses() {
  const classes = useStyles();
  const [sicknesses, setSicknesses] = useState<SicknessProps[]>([]);
  const [filteredSicknesses, setFilteredSicknesses] = useState<SicknessProps[]>([]);
  const [sicknessToSearch, setSicknessToSearch] = useState<string>("");

  const handleSicknessFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSicknessToSearch(e.target.value);
    console.log(sicknessToSearch);
  }

  useEffect(() => {
    if (sicknesses.length === 0) {
      // RequestGetSicknesses
      getSicknesses().then((sicknesses: SicknessProps[]) => setSicknesses(sicknesses));
    }
  });

  useEffect(() => {
    setFilteredSicknesses(sicknesses);
  }, [sicknesses]);

  useEffect(() => {
    if (sicknessToSearch.length > 0) {
      let newSicknesses = sicknesses.filter((sickness) => sickness.name.toLowerCase().includes(sicknessToSearch.toLowerCase()));
      setFilteredSicknesses(newSicknesses);
    } else {
      setFilteredSicknesses(sicknesses);
    }
  }, [sicknessToSearch, sicknesses]);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Typography className={classes.typography} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Your Sicknesses
              <LocalHospital className={classes.hospitalIcon}/>
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
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
          </div> <br />
          <Grid container spacing={4}>
            {filteredSicknesses.map((sickness: SicknessProps) => (
              <CardSickness
                key={sickness.id}
                id={sickness.id}
                name={sickness.name}
                img={sickness.img}
                scientificNotation={sickness.scientificNotation}
                desc={sickness.desc}
              />
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}