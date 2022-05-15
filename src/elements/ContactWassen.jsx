import React, { Component } from 'react';
import PageHelmet from '../component/common/Helmet';
import { FiAtSign, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaTelegram } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../component/header/HeaderWassen';
import Footer from '../component/footer/FooterWassen';

class ContactWassen extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle='Contact Us' />

        <Header
          headerPosition='header--static logoresize'
          logo='all-dark'
          color='color-black'
        />

        {/* Start Breadcrump Area */}
        <div
          className='rn-page-title-area pt--120 pb--190 bg_image'
          style={{
            backgroundImage: `url(${'/assets/images/wassen/contact-us.jpg'})`,
          }}
          data-black-overlay='6'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='rn-page-title text-center pt--100'>
                  <h2 className='title text-light'>Get in touch anytime!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className='rn-contact-top-area ptb--120 bg_color--5'>
          <div className='container'>
            <div className='row'>
              {/* Start Single Address  */}
              <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                <div className='rn-address'>
                  <div className='icon'>
                    <FiMapPin />
                  </div>
                  <div className='inner'>
                    <h4 className='title'>Cambodia Office</h4>
                    <p>
                      No 61, St. Silver, Sovanna, Chomkar Mon, Phnom Penh,
                      Cambodia
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50'>
                <div className='rn-address'>
                  <div className='icon'>
                    <FiMapPin />
                  </div>
                  <div className='inner'>
                    <h4 className='title'>Indonesia Office</h4>
                    <p>No 9A, Jalan Panjang Kedoya, Jakarta Barat, Indonesia</p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50'>
                <div className='rn-address'>
                  <div className='icon'>
                    <FiAtSign />
                  </div>
                  <div className='inner'>
                    <h4 className='title'>Social Media</h4>
                    <p>
                      <a href='https://www.facebook.com/wassendetergent/'>
                        <FaFacebookF /> @wassendetergent
                      </a>
                    </p>
                    <p>
                      <a href='https://www.instagram.com/wassendetergent/'>
                        <FaInstagram /> @wassendetergent
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
            <div className='section-title text-center service-style--3 mt--80 mb--30'>
              <h3 className='title'>Become Wassen Distributor</h3>
            </div>
            <div className='row mt--50 justify-content-center'>
              {/* Start Single Address  */}
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--20'>
                <div className='rn-address'>
                  <div className='icon'>
                    <FaTelegram />
                  </div>
                  <div className='inner'>
                    <h4 className='title'>Telegram Scan Code</h4>
                    <img
                      src='/assets/images/wassen/wassentelegram.jpeg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50'>
                <div className='rn-address'>
                  <div className='icon'>
                    <FiMail />
                  </div>
                  <div className='inner'>
                    <h4 className='title'>Email</h4>
                    <p>
                      <a href='mailto:distribution@wassendetergent.com'>
                        distribution @wassendetergent.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

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
export default ContactWassen;
