import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from "./MenuStyles";
import { SimpleMenuProps } from "../../models/TypeSimpleMenuProps";


export default function SimpleMenu({ handleChange }: SimpleMenuProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Avatar onClick={handleClick} className={classes.avatar}>
      </Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleChange("/profile")}>Profile</MenuItem>
        <MenuItem onClick={() => handleChange("/logout")}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
}