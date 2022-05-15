// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import WassenHome from './home/WassenHome';
import ProductsWassen from './home/ProductsWassen';

// Element Layout
import error404wassen from './elements/error404wassen';
import ContactWassen from './elements/ContactWassen';
import ProductDetails from './elements/ProductDetails';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <PageScrollTop>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={WassenHome}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/products`}
              component={ProductsWassen}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/product-details`}
              component={ProductDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={ContactWassen}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404wassen}
            />
            <Route component={error404wassen} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.register();
