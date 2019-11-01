import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';

import Searchbar from './components/search/Searchbar';

import './assets/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '', videos: [], page: 1 };
  }

  fetchResults = (searchTerm) => {
console.log('searchTerm', searchTerm);
  } 

  render() {
    let searchResponse = '';

    if (this.state.searchTerm.length > 0) {
      searchResponse = (
        <Header as="h3">You searched for: {this.state.searchTerm}</Header>
      );
    }
    return (
      <Container className="mainContent">
        <Segment.Group>
          <Segment>
            <Searchbar fetchResults={this.fetchResults} />
          </Segment>
          <Segment>
            {searchResponse}
          </Segment>
        </Segment.Group>
    </Container>
    );
  }
}

export default App;
