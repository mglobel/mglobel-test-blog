import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

{/* views */}
import Home from './views/Home.jsx';

{/* show case components */}
import Bookshelf from './components/Bookshelf.jsx';

{/* const NoMatch = React.createClass({render: <div>Learn Webpack</div>;})*/}
{/* <Route path='*' component={NoMatch} /> */}

{/* giving an error during build <Router history={browserHistory}> */}
render((
  <Router>
    <Route path='/' component={Home} />
    <Route path='bookshelf' component={Bookshelf} />
  </Router>
), document.getElementById('app'));
