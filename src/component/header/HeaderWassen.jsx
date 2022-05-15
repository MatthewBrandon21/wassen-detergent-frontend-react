import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiMenu, FiGlobe } from 'react-icons/fi';

class HeaderWassen extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener('load', function () {
      console.log('All assets are loaded');
    });
  }
  menuTrigger() {
    document.querySelector('.header-wrapper').classList.toggle('menu-open');
  }
  CLoseMenuTrigger() {
    document.querySelector('.header-wrapper').classList.remove('menu-open');
  }
  state = {
    isOpen: false,
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? ' show' : ''}`;
    var elements = document.querySelectorAll('.has-droupdown > a');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector('.submenu')
            .classList.toggle('active');
          this.classList.toggle('open');
        };
      }
    }

    const { logo, color, headerPosition } = this.props;
    let logoUrl;
    if (logo === 'light') {
      logoUrl = (
        <img src='/assets/images/logo/logo-light-wassen.png' alt='Trydo' />
      );
    } else if (logo === 'dark') {
      logoUrl = <img src='/assets/images/logo/logo-dark.png' alt='Trydo' />;
    } else if (logo === 'symbol-dark') {
      logoUrl = (
        <img src='/assets/images/logo/logo-symbol-dark.png' alt='Trydo' />
      );
    } else if (logo === 'all-dark') {
      logoUrl = (
        <img src='/assets/images/logo/logo-all-dark-wassen.png' alt='Trydo' />
      );
    } else if (logo === 'symbol-light') {
      logoUrl = (
        <img src='/assets/images/logo/logo-symbol-light.png' alt='Trydo' />
      );
    } else {
      logoUrl = <img src='/assets/images/logo/logowassen.png' alt='Trydo' />;
    }

    return (
      <header
        className={`header-area formobile-menu ${headerPosition} ${color}`}
      >
        <div className='header-wrapper' id='header-wrapper'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-3 col-md-4 col-6'>
                <div className='header-left'>
                  <div className='logo'>
                    <a href='/'>{logoUrl}</a>
                  </div>
                </div>
              </div>
              <div className='col-lg-9 col-md-8 col-6'>
                <div className='header-right justify-content-end'>
                  <nav className='mainmenunav d-lg-block'>
                    <ul className='mainmenu'>
                      <li>
                        <Link to='/products'>Products</Link>
                      </li>
                      <li>
                        <Link to='/contact'>Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                  <div
                    className='dropdown header-btn'
                    onClick={this.toggleOpen}
                  >
                    <button
                      className='dropdown-toggle rn-btn'
                      type='button'
                      id='dropdownMenuButton'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                    >
                      <FiGlobe fontSize='1.5em' />
                    </button>
                    <div
                      className={menuClass}
                      aria-labelledby='dropdownMenuButton'
                    >
                      <a className='dropdown-item' href='#nogo'>
                        English
                      </a>
                      <a className='dropdown-item' href='#nogo'>
                        Cambodia
                      </a>
                      <a className='dropdown-item' href='#nogo'>
                        Indonesia
                      </a>
                    </div>
                  </div>
                  {/* Start Humberger Menu  */}
                  <div className='humberger-menu d-block d-lg-none pl--20'>
                    <span
                      onClick={this.menuTrigger}
                      className='menutrigger text-white'
                    >
                      <FiMenu />
                    </span>
                  </div>
                  {/* End Humberger Menu  */}
                  <div className='close-menu d-block d-lg-none'>
                    <span
                      onClick={this.CLoseMenuTrigger}
                      className='closeTrigger'
                    >
                      <FiX />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderWassen;
