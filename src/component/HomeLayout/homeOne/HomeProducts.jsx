import React, { Component } from 'react';
import Slider from 'react-slick';
import { portfolioSlick2 } from '../../../page-demo/script';
import { Link } from 'react-router-dom';

const PortfolioList = [
  {
    image: '5000g-lavender.jpg',
    category: 'Lavender',
    title: ' Detergent Powder 5000g',
  },
  {
    image: '150g-original.jpg',
    category: 'Original',
    title: ' Detergent Powder 150g',
  },
  {
    image: '150g-original.jpg',
    category: 'Lavender',
    title: ' Detergent Powder 150g',
  },
  {
    image: '350g-lavender.jpg',
    category: 'Lavender',
    title: ' Detergent Powder 350g',
  },
  {
    image: '3200g-original.jpg',
    category: 'Original',
    title: ' Detergent Powder 3200g',
  },
  {
    image: '5000g-original.jpg',
    category: 'Original',
    title: ' Detergent Powder 5000g',
  },
];

class HomeProducts extends Component {
  render() {
    let title = 'Our Products',
      description = 'Find your best product for protect your family';
    return (
      <React.Fragment>
        <div className='portfolio-wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='section-title'>
                  <h2>{title}</h2>
                  <p>{description}</p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='view-more-btn mt--10 mt_sm--60 text-center'>
                  <a className='rn-button-style--2 btn-solid' href='/products'>
                    <span>View all products</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='portfolio-slick-activation mt--70 mt_sm--40'>
            <Slider {...portfolioSlick2}>
              {PortfolioList.map((value, index) => (
                <div className='portfolio' key={index}>
                  <div className='thumbnail-inner'>
                    <div
                      className={`thumbnail`}
                      style={{
                        backgroundImage: `url(${
                          '/assets/images/products/' + value.image ||
                          '/assets/images/portfolio/portfolio-1.jpg'
                        })`,
                      }}
                    ></div>
                    <div
                      className={`bg-blr-image`}
                      style={{
                        backgroundImage: `url(${
                          '/assets/images/portfolio/portfolio-1.jpg' ||
                          '/assets/images/portfolio/portfolio-1.jpg'
                        })`,
                      }}
                    ></div>
                  </div>
                  <div className='content'>
                    <div className='inner'>
                      <p>{value.category}</p>
                      <h4 className='title'>
                        <a href='/product-details'>{value.title}</a>
                      </h4>
                    </div>
                  </div>
                  <Link className='link-overlay' to='/product-details'></Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomeProducts;
