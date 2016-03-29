import React from 'react';
import instantsearch from 'instantsearch.js';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.search = instantsearch({
      appId: '5WULZ0J5FB',
      apiKey: 'e4a3465721383a39b91a2d391a37c68a',
      indexName: 'bookshelf',
    });
  }

  componentDidMount() {
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search for books on the shelf...'
      })
    );
    
    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        hitsPerPage: 10,
        templates: {
          empty: 'No results',
          item: '<a href="/#/book/{{permalink}}">{{title}}</a><br /> by {{{author}}}',
        },
      })
    );
    this.search.start();
  }

  render() {
    return(
      <div>
        <div id="search-box" style={{display: 'none'}}></div>
        <div id="hits-container"></div>
      </div>
    );
  }
}

export default Bookshelf;
