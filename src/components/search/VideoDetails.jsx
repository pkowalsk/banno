import React from 'react';
import { List, Image, Grid } from 'semantic-ui-react';

class VideoDetails extends React.Component {
   render() {
      return (
         <List.Item>
            <Grid>
               <Grid.Row>
                  <Grid.Column width={2}>
                     <Image src={this.props.video.snippet.thumbnails.default.url} />
                  </Grid.Column>
                  <Grid.Column width={14}>
                     <List.Content>
                        <List.Header
                           as="a"
                           href={`https://www.youtube.com/watch?v=${this.props.video.id.videoId}`}
                           target="_blank">
                           {this.props.video.snippet.title}
                        </List.Header>
                        <List.Description className="videoDescription">
                           {this.props.video.snippet.description}
                           <br /><br />
                           {this.props.stats[0].statistics.commentCount} Comments
                        </List.Description>
                     </List.Content>
                  </Grid.Column>
               </Grid.Row>
            </Grid>
            
            
         </List.Item>
     );
  }
}

export default VideoDetails;