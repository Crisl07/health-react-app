import React, { useRef, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from './ProfileStyles';
import { Container, Button, Box, MenuItem } from '@material-ui/core';
import { UserProps } from '../../types/components/TypeUserProps';
import { getUserInfo, updateUser } from '../../api/profile';
import { GenreProps } from '../../types/components/TypeGenreProps';
import { history } from '../../App';

const genres: GenreProps[] = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'prefer not to say',
    label: 'Prefer not to say',
  },
];

export default function Profile() {
  const classes = useStyles();
  const avatar = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);
  const genre = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<UserProps | null>(null);

  useEffect(() => {
    if (!user) {
      getUserInfo().then((user: UserProps) => setUser(user));
    }
  }, [user]);

  const updateUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUserInfo = {
      name: name.current!.value,
      email: email.current!.value,
      password: password.current!.value,
      avatar: avatar.current!.value,
      age: age.current!.value,
      genre: genre.current!.value,
      address: address.current!.value,
    };
    try {
      await updateUser(newUserInfo);
      history.push('/signin');
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar
            className={classes.avatar}
            src={user && user.avatar ? user.avatar : ''}
          />
          <Typography component="h1" variant="h5">
            {user && user.name ? user.name : 'User name'}
          </Typography>
          <form className={classes.form} noValidate onSubmit={updateUserInfo}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="avatar"
              label="Avatar URL"
              name="avatar"
              autoComplete="avatar"
              color="secondary"
              autoFocus
              placeholder="http://imagenes.com/image.png"
              defaultValue={user && user.avatar ? user.avatar : ''}
              inputRef={avatar}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              color="secondary"
              autoFocus
              placeholder="Cristian"
              defaultValue={user && user.name ? user.name : ''}
              inputRef={name}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              color="secondary"
              autoFocus
              placeholder="cristian@gmail.com"
              defaultValue={user && user.email ? user.email : ''}
              inputRef={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color="secondary"
              inputRef={password}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              color="secondary"
              autoFocus
              defaultValue={user && user.age ? user.age : '18'}
              placeholder="7"
              inputRef={age}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              select
              id="genre"
              label="Genre"
              name="genre"
              autoComplete="genre"
              color="secondary"
              autoFocus
              placeholder="male"
              defaultValue={user && user.genre ? user.genre : 'male'}
              inputRef={genre}
            >
              {genres.map((genre: GenreProps, i: number) => (
                <MenuItem key={i} value={genre.value}>
                  {genre.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              autoComplete="address"
              color="secondary"
              autoFocus
              placeholder="cll 33 # 47 - 89"
              defaultValue={user && user.address ? user.address : ''}
              inputRef={address}
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
