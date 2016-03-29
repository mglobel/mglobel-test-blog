import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

{/* views */}
import Home from './views/Home.jsx';

{/* show case components */}
import Bookshelf from './components/Bookshelf.jsx';

{/* const NoMatch = React.createClass({render: <div>Learn Webpack</div>;})*/}

render((
  {/* giving an error during build <Router history={browserHistory}> */}
  <Router>
    <Route path='/' component={Home}>
      {/* <Route path='llc' component={Llc}> */}
    </Route>
    <Route path='bookshelf' component={Bookshelf} />

    {/* <Route path='*' component={NoMatch} /> */}
  </Router>

), document.getElementById('app'));
