import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} - Wassen Detergent </title>
          <meta
            name='description'
            content='Official Wassen Detergent, the best and biggest laundry detergent products on Cambodia.'
          />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
