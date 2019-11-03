import React from 'react';
import { Container, Segment, Message, Loader, Dimmer } from 'semantic-ui-react';

import Searchbar from './components/search/Searchbar';
import SearchResults from './components/search/SearchResults';

import './assets/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '', videos: [], err: '', gapiReady: false, sort: 'relevance' };
  }

  componentDidMount() {
    this.loadYoutubeApi();
  }

  loadYoutubeApi = () => {
    window.gapi.load('client', () => {
      window.gapi.client.setApiKey('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

      window.gapi.client.load('youtube', 'v3', () => {
        this.setState({ gapiReady: true });
      });
    });
  }

  fetchResults = (searchTerm, sort) => {
    if (this.state.gapiReady) {
      return window.gapi.client.youtube.search.list({
        'part': 'snippet',
        'maxResults': 25,
        'q': searchTerm,
        'order': sort
      })
      .then((response) => {
        this.getVideoStats(searchTerm, response.result.items, sort);
      },
      (err) => { this.setState({ videos: [], err: 'There was an error, please try again' }); }
      );
    }
  }

  // since the youtube "search" method doesn't return stats, we need to grab them from another endpoint
  getVideoStats = (searchTerm, videos) => {
    // create comma separated list of video id's to pass to api and retrieve stats
    const vidIds = videos.map(function(vid){
       return vid.id.videoId;
    }).join(",");

    return window.gapi.client.youtube.videos.list({
       "part": "statistics",
       "id": vidIds
     })
    .then((response) => {
       this.setState({ searchTerm, videos, stats: response.result.items });
    },
    function(err) { console.error("Execute error", err); });
 }

  render() {
    if(!this.state.gapiReady) {
      return (
        <Dimmer active>
          <Loader>Loading API</Loader>
        </Dimmer>
      );
    }
    
    return (
      <Container className="mainContent">
        <Segment.Group>
          <Segment>
            <Searchbar fetchResults={this.fetchResults} />
          </Segment>
          <Segment>
            <Message
              error
              hidden={this.state.err.length === 0}
              content={this.state.err}
            />
            <SearchResults videos={this.state.videos} searchTerm={this.state.searchTerm} stats={this.state.stats} />
          </Segment>
        </Segment.Group>
    </Container>
    );
  }
}

export default App;
