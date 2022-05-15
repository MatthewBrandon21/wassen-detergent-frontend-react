import React from 'react';
import ScrollToTop from 'react-scroll-up';
import FooterTwo from '../component/footer/FooterWassen';
import { FiChevronUp } from 'react-icons/fi';
import Header from '../component/header/HeaderWassen';
import TabProducts from '../elements/tab/TabProducts';
import Helmet from '../component/common/Helmet';

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Welcome to my World',
    description: '',
    buttonText: '',
    buttonLink: '',
  },
];

const ProductsWassen = () => {
  return (
    <div>
      <Helmet pageTitle='Products' />
      {/* Start Header Area  */}
      <Header
        headerPosition='header--static logoresize'
        logo='all-dark'
        color='color-black'
      />
      {/* End Header Area  */}

      <div className='slider-wrapper'>
        {/* Start Single Slide */}
        {SlideList.map((value, index) => (
          <div
            className='slide designer-portfolio slider-style-3  d-flex align-items-center justify-content-center rn-slider-height'
            key={index}
          >
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-7'>
                  <div className=''>
                    <img
                      src='/assets/images/wassen/products-all.png'
                      alt='Slider Images'
                    />
                  </div>
                </div>
                <div className='col-lg-5 mt_md--40 mt_sm--40'>
                  <div className={`inner ${value.textPosition}`}>
                    <h1 className='title'>Our Products</h1>
                    <p>Find your best product for protect your family</p>
                    {value.description ? (
                      <p className='description'>{value.description}</p>
                    ) : (
                      ''
                    )}
                    {value.buttonText ? (
                      <div className='slide-btn'>
                        <a
                          className='rn-button-style--2 btn-primary-color'
                          href={`${value.buttonLink}`}
                        >
                          {value.buttonText}
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Single Slide */}
      </div>

      {/* Start Designer Portfolio  */}
      <div className='designer-portfolio-area ptb--120 bg_color--1'>
        <div className='wrapper plr--70 plr_sm--30 plr_md--30'>
          <TabProducts column='col-lg-4 col-md-6 col-sm-6 col-12' />
        </div>
      </div>
      {/* End Designer Portfolio  */}

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

      {/* Start Footer Style  */}
      <FooterTwo />
      {/* End Footer Style  */}

      {/* Start Back To Top */}
      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default ProductsWassen;
