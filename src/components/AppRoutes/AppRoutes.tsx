import React from 'react';
import { Route } from "react-router-dom";
import { RouteProps } from '../../types/components/TypeRouteProps';

export const AppRoutes = (props: RouteProps) => {

  return (
    <React.Fragment>
      <Route exact path={props.path} component={props.component} />
    </React.Fragment>
  );
}