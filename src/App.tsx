import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from './components/SignUp/SignUp';
import Sicknesses from './components/Sicknesses/Sicknesses';
import WellnessPlan from "./components/WellnessPlan/WellnessPlan";
import MedicHistory from "./components/MedicHistory/MedicHistory";
import { RootState } from './redux/reducers';
import { logIn, IsLoggedInType, isLoggedInAction } from "./redux/actions/index";
import { AppProps } from "./models/TypeAppProps";


function App(props: AppProps) {
  useEffect(() => {
    console.log(props.isLoggedIn);
  }, [props.isLoggedIn])

  const handleChange = (newIsLoggedIn: boolean) => {
    props.logIn(newIsLoggedIn);
  }

  return (
    <Router>
      <div>
        {props.isLoggedIn && (
          <Header />
        )}
        <Switch>
          <Route exact path={["/", "/signin"]} render={() =>
            <SignIn changeIsLoggedIn={handleChange} />}
          />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/sicknesses" component={Sicknesses} />
          <Route exact path="/sicknesses/wellnessplan/:sickness" component={WellnessPlan} />
          <Route exact path="/medicHistory" component={MedicHistory} />
          <Route render={() =>
            <Redirect to="/sicknesses" />}
          />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state: RootState) => {
  return { isLoggedIn: state.isLoggedIn }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logIn: (isLoggedIn: IsLoggedInType) => dispatch<isLoggedInAction>(logIn(isLoggedIn)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
