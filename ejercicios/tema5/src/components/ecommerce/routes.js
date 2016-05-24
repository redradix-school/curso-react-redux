import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Layout from './layout';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thankyou';
import NotFound from './notfound';

//TODO - añadir resto de rutas!!!
export default (
  <Route path='/' component={ Layout }>
    <Route path='*' component={ NotFound } />
  </Route>
);