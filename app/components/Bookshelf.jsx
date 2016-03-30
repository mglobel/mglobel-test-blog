import React from 'react';
import instantsearch from 'instantsearch.js';

var searchBoxStyles = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px'
}

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
        <div id="search-box" style={searchBoxStyles}></div>
        <div id="hits-container"></div>
        <a href="https://www.algolia.com/" style={searchBoxStyles}>Powered by Algolia</a>
      </div>
    );
  }
}

export default Bookshelf;
