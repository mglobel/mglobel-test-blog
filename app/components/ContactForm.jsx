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
  width: '80%'
}

var modalCloseStyle = {
  color: '#aaa',
  float: 'right',
  fontSize: '28px',
  fontWeight: 'bold'
}

class ContactForm extends React.Component {
  render() {
    return(
      <div style={modalBackgroundStyle}>
        <div style={modalContainerStyle}>
          <span style={modalCloseStyle}>x</span>
          <h3>Ready to get in contact?</h3>
          <form action='https://formspree.io/mglobel@gmail.com' method='POST'>
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
              <option value='personal-project'>Personal Project</option>
              <option value='startup'>Startup</option>
              <option value='small-business'>Small Business</option>
              <option value='enterprise'>Enterprise</option>
              <option value='not-for-profit'>Non-Profit/Community Initiative</option>
            </select>
            <input type='submit' value='Get in Contact'/>
          </form>
          <small>
            You'll receive an email with some more information and follow
            up questions. I look forward to discovering more about you're working on!
          </small>
        </div>
      </div>
    );
  }
}

export default ContactForm;
