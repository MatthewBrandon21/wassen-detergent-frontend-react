import React, { Component } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const SocialShare = [
  {
    Social: <FaFacebookF />,
    link: 'https://www.facebook.com/wassendetergent/',
  },
  {
    Social: <FaInstagram />,
    link: 'https://www.instagram.com/wassendetergent/',
  },
];

class FooterWassen extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className='footer-area'>
          <div className='footer-wrapper'>
            <div className='row align-items-end row--0'>
              <div className='col-lg-12'>
                <div className='footer-right' data-black-overlay='6'>
                  <div className='row'>
                    {/* Start Single Widget  */}
                    <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                      <div className='inner'>
                        <div className='logo text-center text-sm-left mb_sm--20'>
                          <a href='/home-one'>
                            <img
                              src='/assets/images/logo/logowassen.png'
                              alt='Logo images'
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className='col-lg-4 col-sm-4 col-12 mt_mobile--30'>
                      <div className='footer-link'>
                        <h4>Quick Link</h4>
                        <ul className='ft-link'>
                          <li>
                            <a href='/products'>Products</a>
                          </li>
                          <li>
                            <a href='/contact'>Let's Talk</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className='col-lg-4 col-sm-4 col-12 mt_mobile--30'>
                      <div className='footer-link'>
                        <h4>Say Hello</h4>
                        <ul className='ft-link'>
                          <li>
                            <a href='mailto:admin@wassendetergent.com'>
                              admin@wassendetergent.com
                            </a>
                          </li>
                        </ul>

                        <div className='social-share-inner'>
                          <ul className='social-share social-style--2 d-flex justify-content-start liststyle mt--15'>
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className='col-lg-12'>
                      <div className='copyright-text'>
                        <p>© 2022. All rights reserved by WassenDetergent.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default FooterWassen;
