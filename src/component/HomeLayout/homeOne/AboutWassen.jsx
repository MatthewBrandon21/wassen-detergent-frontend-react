import React, { Component } from 'react';

class About extends Component {
  render() {
    let title = 'Wassen Detergent',
      description =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatibus minus quasi facilis, aliquid ratione molestias, autem natus molestiae, accusamus sit recusandae iure voluptas atque ipsam assumenda tenetur rerum repellendus?';
    return (
      <React.Fragment>
        <div className='about-wrapper'>
          <div className='container'>
            <div className='row row--35 align-items-center'>
              <div className='col-lg-5 col-md-12'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src='/assets/images/wassen/about-wassen-1.jpg'
                    alt='About Images'
                  />
                </div>
              </div>

              <div className='col-lg-7 col-md-12'>
                <div className='about-inner inner'>
                  <div className='section-title'>
                    <h1 className='title'>{title}</h1>
                    <p className='description'>{description}</p>
                  </div>
                  <div className='about-us-list'>
                    <h4 className='title'>Clean Clothes, Clean Life</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
