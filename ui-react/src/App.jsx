import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import URIS from 'uris';

import Navbar from './views/Navbar';

import Landing from './views/Landing';
import Upload from './views/Upload';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route path={URIS.UPLOAD()} component={Upload} />
          <Route component={Landing} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
