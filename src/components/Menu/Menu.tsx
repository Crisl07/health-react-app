import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import { useStyles } from "./MenuStyles";
import { SimpleMenuProps } from "../../types/components/TypeSimpleMenuProps";
import { RootState } from '../../types/redux/TypeRootState';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { UserProps } from '../../types/components/TypeUserProps';
import { logIn } from '../../redux/actions';

function SimpleMenu({ handleChange, avatar }: SimpleMenuProps) {
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
      <Avatar onClick={handleClick} className={classes.avatar} src={avatar ? avatar : ""}>
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

const mapStateToProps = (state: RootState) => {
  return {
    avatar: state.avatar,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logIn: (user: UserProps) => dispatch(logIn(user) as any),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleMenu);