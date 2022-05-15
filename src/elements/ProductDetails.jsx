import React, { Component } from 'react';
import PageHelmet from '../component/common/Helmet';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../component/header/HeaderWassen';
import Footer from '../component/footer/FooterWassen';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle='Product Details' />

        <Header
          headerPosition='header--static logoresize'
          logo='all-dark'
          color='color-black'
        />

        {/* Start Portfolio Details */}
        <div className='rn-portfolio-details ptb--120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='portfolio-details'>
                  <div className='inner'>
                    <div className='row'>
                      <div className='col-lg-7'>
                        <h2>Detergent Powder 150g Original</h2>
                      </div>
                      <div className='col-lg-5 mt_sm--20'>
                        <img
                          src='/assets/images/wassen/Powder 3200gr.png'
                          alt='Portfolio Images'
                        />
                      </div>
                    </div>

                    <p className='subtitle'>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commod viverra maecenas accumsan lacus vel facilisis. ut
                      labore et dolore magna aliqua.{' '}
                    </p>

                    <div className='portfolio-view-list d-flex flex-wrap'>
                      <div className='port-view'>
                        <span>Size</span>
                        <h4>150 gram</h4>
                      </div>

                      <div className='port-view'>
                        <span>SKU</span>
                        <h4>KS93528TUT</h4>
                      </div>

                      <div className='port-view'>
                        <span>Fragrance</span>
                        <h4>Lemon</h4>
                      </div>
                    </div>

                    <div className='portfolio-share-link mt--20 pb--70 pb_sm--40'>
                      <ul className='social-share rn-lg-size d-flex justify-content-start liststyle mt--15'></ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}
        {/* Start Finding Us Area  */}
        <div className='rn-finding-us-area rn-finding-us bg_color--1 mb-5'>
          <div className='inner'>
            <div className='content-wrapper'>
              <div className='content'>
                <h4>Find our distribution retails</h4>
                <p>
                  Spread across 17 distric on Cambodioa and grow time by time.
                </p>
                <a className='rn-btn btn-white' href='/contact'>
                  Contact Us
                </a>
              </div>
            </div>
            <div className='thumbnail'>
              <div className='image'>
                <img
                  src='/assets/images/wassen/find-distribution-banner.jpg'
                  alt='Finding Images'
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Back To Top */}
        <div className='backto-top'>
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default ProductDetails;
