import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-image-lightbox/style.css';

const TabOne = [
  {
    image: '150g-original.jpg',
    category: 'Powder',
    title: 'Detergent Powder 150g Original',
  },
  {
    image: '150g-original.jpg',
    category: 'Powder',
    title: 'Detergent Powder 150g Lavender',
  },
  {
    image: '350g-lavender.jpg',
    category: 'Powder',
    title: 'Detergent Powder 350g Lavender',
  },
  {
    image: '3200g-original.jpg',
    category: 'Powder',
    title: 'Detergent Powder 3200g Original',
  },
  {
    image: '5000g-original.jpg',
    category: 'Powder',
    title: 'Detergent Powder 5000g Original',
  },
  {
    image: '5000g-lavender.jpg',
    category: 'Powder',
    title: 'Detergent Powder 5000g Lavender',
  },
];

const TabTwo = [
  {
    image: '150g-original.jpg',
    category: 'Powder',
    title: 'Detergent Powder 150g Original',
  },
  {
    image: '150g-original.jpg',
    category: 'Powder',
    title: 'Detergent Powder 150g Lavender',
  },
  {
    image: '350g-lavender.jpg',
    category: 'Powder',
    title: 'Detergent Powder 350g Lavender',
  },
  {
    image: '3200g-original.jpg',
    category: 'Powder',
    title: 'Detergent Powder 3200g Original',
  },
  {
    image: '5000g-original.jpg',
    category: 'Powder',
    title: 'Detergent Powder 5000g Original',
  },
  {
    image: '5000g-lavender.jpg',
    category: 'Powder',
    title: 'Detergent Powder 5000g Lavender',
  },
];

const TabThree = [];

class TabProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      tab2: 0,
      tab3: 0,
      isOpen: false,
    };
  }
  render() {
    const { column } = this.props;
    return (
      <div>
        <Tabs>
          <div className='row text-center'>
            <div className='col-lg-12'>
              <div className='tablist-inner'>
                <TabList className='pv-tab-button text-center mt--0'>
                  <Tab>
                    <span>All</span>
                  </Tab>
                  <Tab>
                    <span>Powder</span>
                  </Tab>
                  <Tab>
                    <span>Liquid</span>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>

          <TabPanel className='row row--35'>
            {TabOne.map((value, index) => (
              <div className={`${column}`} key={index}>
                <div className='item-portfolio-static'>
                  <div className='portfolio-static'>
                    <div className='thumbnail-inner'>
                      <div className='thumbnail'>
                        <a href='product-details'>
                          <img
                            src={`/assets/images/products/${value.image}`}
                            alt='Portfolio Images'
                          />
                        </a>
                      </div>
                    </div>
                    <div className='content'>
                      <div className='inner'>
                        <p>{value.category}</p>
                        <h4>
                          <a href='product-details'>{value.title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className='row row--35'>
            {TabTwo.map((value, index) => (
              <div className={`${column}`} key={index}>
                <div className='item-portfolio-static'>
                  <div className='portfolio-static'>
                    <div className='thumbnail-inner'>
                      <div className='thumbnail'>
                        <a href='product-details'>
                          <img
                            src={`/assets/images/products/${value.image}`}
                            alt='Portfolio Images'
                          />
                        </a>
                      </div>
                    </div>
                    <div className='content'>
                      <div className='inner'>
                        <p>{value.category}</p>
                        <h4>
                          <a href='product-details'>{value.title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>

          <TabPanel className='row row--35'>
            {TabThree.map((value, index) => (
              <div className={`${column}`} key={index}>
                <div className='item-portfolio-static'>
                  <div className='portfolio-static'>
                    <div className='thumbnail-inner'>
                      <div className='thumbnail'>
                        <a href='product-details'>
                          <img
                            src={`/assets/images/products/${value.image}`}
                            alt='Portfolio Images'
                          />
                        </a>
                      </div>
                    </div>
                    <div className='content'>
                      <div className='inner'>
                        <p>{value.category}</p>
                        <h4>
                          <a href='product-details'>{value.title}</a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default TabProducts;
