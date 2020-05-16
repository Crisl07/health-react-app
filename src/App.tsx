import React from 'react';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import createHistory from 'history/createBrowserHistory';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from './types/redux/TypeRootState';
import { logIn } from './redux/actions/index';
import { AppProps } from './types/components/TypeAppProps';
import { UserProps } from './types/components/TypeUserProps';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAxiosInterceptor } from './api/interceptor';
import { routes } from './routes';
import { RouteProps } from './types/components/TypeRouteProps';
import { AppRoutes } from './components/AppRoutes/AppRoutes';

export const history = createHistory();

toast.configure();
useAxiosInterceptor();

function App({ isLoggedIn }: AppProps) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router history={history}>
        <div>
          {isLoggedIn && <Header />}
          <Switch>
            {routes.map((route: RouteProps, key: number) => (
              <AppRoutes
                key={key}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route exact path={['/', '/signin']} component={SignIn} />
            <Route render={() => <Redirect to="/signin" />} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    logIn: (user: UserProps) => dispatch(logIn(user) as any),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
