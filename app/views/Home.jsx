import React from 'react';
import Bookshelf from '../components/Bookshelf.jsx';

var wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
};

var headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#A62E44',
  flexBasis: '95%',
  justifyContent: 'space-between',
  padding: '10px 20px 10px 20px',
  color: '#F5F0F0'
};

var linkStyle = {
  color: '#F5F0F0'
};

var heroStyle = {
  textAlign: 'center',
  backgroundColor: 'rgba(89, 2, 18, 0.5)',
  color: '#F5F0F0',
  flexBasis: '12em',
  padding: '10px 20px 10px 20px',
  flexShrink: '1.0'
};

var pageContentStyle = {
  backgroundColor: '#FFF5E7',
};

var llcInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexShrink: '1'
}

class Home extends React.Component {
  render() {
    return (
      <div style={wrapperStyle}>


        <div style={headerStyle}>
          <span>
            <h2>MGLobel</h2>
          </span>
          <a href="#" style={linkStyle}>Start a Project</a>
        </div>

        <div style={heroStyle}>
          <h1>Software developer and business strategist.</h1>
          <h2>Crafting lean technology solutions since 2011.</h2>
        </div>

        <div style={pageContentStyle}>
          <div style={llcInfoStyle}>
            <div>
              <h3>Find your organization's center</h3>
              <p>Get a fresh perspective and creative solutions with MGLobel LLC
              technology consulting. Offering on-site and remote services that will
              help push your business or non-profit forward in the modern age.</p>
              <button>Learn More</button>
            </div>
            <img style={{maxWidth: '150px', maxHeight: '150px'}} src="http://mglobel.com/assets/llc-icon.png" />
          </div>
        </div>
        <Bookshelf />
      </div>
    )
  }
}

export default Home;
