import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

import Searchbar from './components/search/Searchbar';

import './assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <Container className="mainContent">
        <Segment.Group>
          <Segment>
            <Searchbar />
          </Segment>
          <Segment>
            Main body
          </Segment>
        </Segment.Group>
    </Container>
    );
  }
}

export default App;
