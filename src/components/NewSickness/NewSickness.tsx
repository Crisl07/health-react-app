import React, { useRef } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './NewSicknessStyles';
import { Container, Button, Box } from '@material-ui/core';
import { createNewSickness } from '../../api/sicknesses';
import { history } from '../../App';

export default function NewSickness() {
  const classes = useStyles();
  const name = useRef<HTMLInputElement>(null);
  const scientificNotation = useRef<HTMLInputElement>(null);
  const img = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  const createSickness = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSickness = {
      name: name.current!.value,
      scientificNotation: scientificNotation.current!.value,
      img: img.current!.value,
      description: description.current!.value,
    };
    try {
      await createNewSickness(newSickness);
      history.push('/allSicknesses');
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            New Sickness
          </Typography>
          <form className={classes.form} noValidate onSubmit={createSickness}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              color="secondary"
              autoFocus
              inputRef={name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="scientific Notation"
              label="Scientific Notation"
              type="text"
              id="scientific Notation"
              color="secondary"
              inputRef={scientificNotation}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="img"
              label="img"
              type="text"
              id="img"
              color="secondary"
              inputRef={img}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="description"
              label="description"
              type="text"
              id="description"
              color="secondary"
              inputRef={description}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Save
            </Button>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </React.Fragment>
  );
}
