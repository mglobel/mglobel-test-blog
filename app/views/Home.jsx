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
  padding: '5px 20px 5px 20px',
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
    let footerStyle = {
      minHeight: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: '#828282'
    }
    
    let iconStyle = {
      display: 'inline-block',
      width: '25px',
      height:'25px',
      verticalAlign: 'middle',
      paddingLeft: '5px'
    }
    
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
            <div style={footerStyle}>
              <div>
                @mglobel &copy; 2011-2016. All Rights Reserved. 
              </div>
              <div>
                <a href="https://github.com/mglobel" target="blank">
                  <span>
                    <svg style={iconStyle} viewBox="0 0 16 16">
                      <path fill="#828282" d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"/>
                    </svg>
                  </span>
                </a>
                <a href="https://twitter.com/ringmylobel" target="blank">
                  <span>
                    <svg style={iconStyle} viewBox="0 0 16 14">
                      <path fill="#828282" d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809
                      c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"/>
                    </svg>
                  </span>
                </a>
                <a href="http://www.linkedin.com/in/michaelglobel" target="blank">
                  <svg style={iconStyle} viewBox="100 100 300 300">
                    <path fill="#828282" d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/>
                  </svg>
                </a>
                <a href="mailto:mglobel@gmail.com" target="blank">
                  <svg style={iconStyle} viewBox="50 50 375 300">
                    <path fill="#828282" d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
