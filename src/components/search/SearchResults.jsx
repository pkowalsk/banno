import React from 'react';
import { Header, Container, List, Divider } from 'semantic-ui-react';

import VideoDetails from './VideoDetails';

class SearchResults extends React.Component {
   constructor(props) {
      super(props);

      this.state = { videos: props.videos, stats: props.stats };
   }

   static getDerivedStateFromProps(props, state) {
      if (props.videos !== state.videos) {
         return { videos: props.videos, stats: props.stats };
      }
      return null;
   }

   render() {
      let searchResponse = '';
      if (this.props.searchTerm.length > 0) {
         searchResponse = (
            <React.Fragment>
               <Header as="h3">You searched for: {this.props.searchTerm}</Header>
               {this.state.videos.length} Results
            </React.Fragment>
         );
      }

     return (
         <Container>
            {searchResponse}
            <Divider />
            <List divided relaxed>
               {this.state.videos.map(video =>
                  <VideoDetails key={video.id.videoId} video={video} stats={ this.state.stats.filter(stat => stat.id === video.id.videoId )} />
               )}
            </List>
         </Container>
     );
  }
}

export default SearchResults;