import React from 'react';
import Bookshelf from '../components/Bookshelf.jsx';
import ContactForm from '../components/ContactForm.jsx'

var wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
};

var headerStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#525252',
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
  backgroundColor: '#829B40',
  color: '#F5F0F0',
  flexBasis: '12em',
  padding: '10px 20px 10px 20px',
  flexShrink: '1.0'
};

var pageContentStyle = {
  backgroundColor: '#FFF5E7',
  padding: '20px'
};

var llcInfoStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexShrink: '1'
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     show: false
    };

    this.triggerContactModal = this.triggerContactModal.bind(this);
  }
  
  show() {
    console.log('click')
    this.setState({show: true})
  }
  
  close(e) {
    if(e.target.tagName==='SPAN') {
      this.setState({show: false})
    }
  }

  triggerContactModal() {
    this.setState({displayForm: true})
  }

  render() {
    return (
      <div>
        <div onClick={this.close.bind(this)}>
          <ContactForm 
            ref='form'
            show={this.state.show}
          />
        </div>
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
            <button onClick={this.show.bind(this)}>Learn More</button>
          </div>
          <div style={pageContentStyle}>
            <div style={llcInfoStyle}>
              <div>
                <h3>Find your organization's center</h3>
                <p>Get a fresh perspective and creative solutions with MGLobel LLC
                technology consulting. Offering on-site and remote services that will
                help push your business or non-profit forward in the modern age.</p>
              </div>
              <img style={{maxWidth: '150px', maxHeight: '150px'}} src="http://mglobel.com/assets/llc-icon.png" />
            </div>
            <hr />
            <Bookshelf />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
