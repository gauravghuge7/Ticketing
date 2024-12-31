import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UserProtection = ({ component: Component, ...rest }) => {
   const isAuthenticated = !!localStorage.getItem('userToken'); // Example authentication check

   return (
      <Route
         {...rest}
         render={props =>
            isAuthenticated ? (
               <Component {...props} />
            ) : (
               <Redirect to="/login" />
            )
         }
      />
   );
};

export default UserProtection;