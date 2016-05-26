import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Layout from './layout';
import Catalog from './catalog';
import Cart from './cart';
import Checkout from './checkout';
import ThankYou from './thankyou';
import NotFound from './notfound';

export default (
  <Route path='/' component={ Layout }>
    <IndexRoute component={ Catalog } />
    <Route path='cart' component={ Cart } />
    <Route path='checkout' component={ Checkout }  />
    <Route path='thankyou' component={ ThankYou } />
    <Redirect from='catalog' to='/' />
    <Route path='*' component={ NotFound } />
  </Route>
);