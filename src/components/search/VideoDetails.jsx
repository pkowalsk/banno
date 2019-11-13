import React from 'react';
import { List, Image, Grid } from 'semantic-ui-react';

class VideoDetails extends React.Component {
   render() {
      let commentString = '';
      let img = null;
      if(this.props.stats.length > 0) {
         commentString = `${this.props.stats[0].statistics.commentCount} Comments`;
      }
      if(typeof this.props.video.snippet.thumbnails !== 'undefined') {
         img = <Image src={this.props.video.snippet.thumbnails.default.url} />;
      }
      return (
         <List.Item>
            <Grid>
               <Grid.Row>
                  <Grid.Column width={2}>
                     {img}
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
                           {commentString}
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