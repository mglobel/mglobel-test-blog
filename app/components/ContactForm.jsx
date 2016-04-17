import React from 'react';
import instantsearch from 'instantsearch.js';

var modalBackgroundStyle = {
  position: 'fixed',
  zIndex: '2',
  left: '0',
  right: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,.6)',
  overflow: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

var modalContainerStyle = {
  backgroundColor: '#fefefe',
  margin: '15% auto',
  padding: '25px',
  border: '1px solid #888',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px'
}

var modalCloseStyle = {
  color: '#aaa',
  fontSize: '28px',
  fontWeight: 'bold',
  paddingTop: '12px',
  paddingLeft: '80px'
}

var formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '95%',
  minHeight: '220px'
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: props.show
    };
  }
  
  static get defaultProps() {
    return {
      show: false
    }
  }
  
  render() {
    if(!this.props.show == true) return null;
    
    return(
      <span class='clickBackground' style={modalBackgroundStyle} data-modal='true'>
        <div style={modalContainerStyle}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <h3>Ready to get in contact?</h3>
          </div>
          <form style={formStyle} action='https://formspree.io/mglobel@gmail.com' method='POST'>
            <input
              name='name'
              type='text'
              placeholder='Name'
              required='true'/>
            <input
              name='_replyto'
              type='email'
              placeholder='Email'
              required='true'/>
            <input
              name='phone'
              type='telephone'
              placeholder='Phone (Optional)'
              required='true'/>
            <select name='organization-level' required='true'>
              <option>Select the level of project...</option>
              <option value='personal-project'>Personal Project</option>
              <option value='startup'>Startup</option>
              <option value='small-business'>Small Business</option>
              <option value='enterprise'>Enterprise</option>
              <option value='not-for-profit'>Non-Profit/Community Initiative</option>
              <option value='chat'>Just want to chat</option>
            </select>
            <small>
              You'll receive an email with a follow
              up survey. I look forward to finding out more about what you're working on!
            </small>
            <input type='submit' value='Get in Contact'/>
          </form>
        </div>
      </span>
    );
  }
}

export default ContactForm;
