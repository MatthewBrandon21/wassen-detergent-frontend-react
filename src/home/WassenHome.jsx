import React, { Component, Fragment } from 'react';
import ScrollToTop from 'react-scroll-up';
import Slider from 'react-slick';
import { slideSlick } from '../page-demo/script';
import { slickDot } from '../page-demo/script';
import Portfolio from '../component/HomeLayout/homeOne/HomeProducts';
import Header from '../component/header/HeaderWassen';
import FooterTwo from '../component/footer/FooterWassen';
import Helmet from '../component/common/Helmet';
import About from '../component/HomeLayout/homeOne/AboutWassen';
import { FiChevronUp } from 'react-icons/fi';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const SlideList = [
  {
    textPosition: 'text-center',
    bgImage: 'bg_image--32',
  },
  {
    textPosition: 'text-center',
    bgImage: 'bg_image--31',
  },
];

const list = [
  {
    image: 'wassen-video-1.jpg',
    category: 'Video',
    title: 'Wassen Video',
    link: 'https://www.instagram.com/p/CSGVFFil1Sf/',
  },
  {
    image: 'image-2',
    category: 'Photo',
    title: 'Getting tickets to the big show',
    link: '#',
  },
  {
    image: 'image-3',
    category: 'Video',
    title: 'Getting tickets to the big show',
    link: '#',
  },
  {
    image: 'image-3',
    category: 'Video',
    title: 'Getting tickets to the big show',
    link: '#',
  },
];

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

class WassenHome extends Component {
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
      <Fragment>
        <Helmet pageTitle='Laundry Detergent Products' />
        {/* Start Header Area  */}
        <Header
          headerPosition='header--static logoresize'
          logo='all-dark'
          color='color-black'
        />
        {/* End Header Area  */}
        {/* Start Slider Area   */}
        <div className='slider-wrapper'>
          <div className='slider-activation'>
            <Slider className='rn-slick-dot dot-light' {...slideSlick}>
              {SlideList.map((value, index) => (
                <div
                  className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                >
                  <div className='container'>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ''}
                          {value.title ? (
                            <h1 className='title'>{value.title}</h1>
                          ) : (
                            ''
                          )}
                          {value.description ? (
                            <p className='description'>{value.description}</p>
                          ) : (
                            ''
                          )}
                          {value.buttonText ? (
                            <div className='slide-btn'>
                              <a
                                className='rn-button-style--2 btn-solid'
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
            </Slider>
          </div>
        </div>
        {/* End Slider Area   */}
        {/* Start About Area */}
        <div className='about-area about-position-top pb--120 pt--200'>
          <About />
        </div>
        {/* End About Area */}
        {/* Start Content Box  */}
        <div
          className='rn-content-box-area rn-content-box-style--1 pt--60 pb--60 bg_color--5'
          id='about'
        >
          <div className='row row--0 align-items-center'>
            <div className='col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30'>
              <div className='content'>
                <h2 className='fontWeight500'>
                  Spread across 25 distric in Cambodia and grow time by time.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  voluptatibus minus quasi facilis, aliquid ratione molestias,
                  autem natus molestiae, accusamus sit recusandae iure voluptas
                  atque ipsam assumenda tenetur rerum repellendus?
                </p>
                <ul className='list-style mt--30'>
                  <li>Yet this above sewed flirted opened ouch</li>
                  <li>Goldfinch realistic sporadic ingenuous</li>
                  <li>
                    Abominable this abidin far successfully then like piquan
                  </li>
                  <li>Risus commodo viverra</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-12 col-xl-6 mt_sm--30'>
              <div className='thumbnail'>
                <img
                  src='/assets/images/wassen/wassen-distribution-map.jpg'
                  alt='Featured Images'
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Content Box  */}
        {/* Start Portfolio Area */}
        <div className='portfolio-area ptb--120 bg_color--1'>
          <div className='portfolio-sacousel-inner mb--55'>
            <Portfolio />
          </div>
        </div>
        {/* End Portfolio Area */}
        {/* Start Call To Action Area  */}
        <div
          className='call-to-action-wrapper call-to-action bg_image bg_image--35 ptb--125 ptb_lg--80 ptb_md--80 ptb_sm--80'
          id='getstart'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='inner text-left'>
                  <span>Like our product ?</span>
                  <h2>Find our distribution !</h2>
                  <a
                    className='rn-button-style--2 mt--70 mt_sm--30 mt_md--30'
                    href='/contact'
                  >
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Call To Action Area  */}
        {/* Start Portfolio Area */}
        <div
          className='portfolio-area pt--120 pb--140 bg_color--1'
          id='portfolio'
        >
          <div className='rn-slick-dot'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='section-title service-style--3 text-left mb--15 mb_sm--0'>
                    <h2 className='title'>Our Stories</h2>
                    <p>Find out our latest news on</p>
                    <div className='portfolio-share-link pb--20 pb_sm--20'>
                      <ul className='social-share rn-lg-size d-flex justify-content-start liststyle mt--15'>
                        {SocialShare.map((val, i) => (
                          <li key={i}>
                            <a href={`${val.link}`}>{val.Social}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='slick-space-gutter--15 slickdot--20'>
                    <Slider {...slickDot}>
                      {list.map((value, index) => (
                        <div className='portfolio' key={index}>
                          <div className='thumbnail-inner'>
                            <div
                              className={`thumbnail`}
                              style={{
                                backgroundImage: `url(${
                                  '/assets/images/stories/' + value.image ||
                                  '/assets/images/portfolio/portfolio-1.jpg'
                                })`,
                              }}
                            ></div>
                            <div
                              className={`bg-blr-image`}
                              style={{
                                backgroundImage: `url(${
                                  '/assets/images/stories/' + value.image ||
                                  '/assets/images/portfolio/portfolio-1.jpg'
                                })`,
                              }}
                            ></div>
                          </div>
                          <div className='content'>
                            <div className='inner'>
                              <p>{value.category}</p>
                              <h4>
                                <a href={value.link}>{value.title}</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}
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
      </Fragment>
    );
  }
}
export default WassenHome;
