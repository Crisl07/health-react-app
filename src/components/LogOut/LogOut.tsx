import React, { useEffect } from 'react';
import { Dispatch } from "redux";
import { connect } from 'react-redux';
import { LogOutProps } from "../../types/components/TypeLogOutProps";
import { logOut } from '../../redux/actions';
import { history } from "../../App";


function LogOut({ logOut }: LogOutProps) {

  useEffect(() => {
    logOut()
    history.push("/signin");
  })

  return (
    <React.Fragment>
    </React.Fragment>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logOut: () => dispatch(logOut() as any)
  }
}

export default connect(null, mapDispatchToProps)(LogOut);