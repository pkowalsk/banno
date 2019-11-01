import React from 'react';
import { Input, Grid } from 'semantic-ui-react';

class Searchbar extends React.Component {
   constructor(props) {
      super(props);

      this.state = { searchTerm: '' };
   }

   handleChange = e => this.setState({ [e.target.name]: e.target.value })

   keyPress = (e) => {
      if(e.keyCode === 13){
         this.search();
     }
   }

   search = () => {
      this.props.fetchResults(this.state.searchTerm);
   }

   render() {
     return (
         <Grid>
            <Grid.Row>
               <Grid.Column width={2} verticalAlign={'middle'}>
                  <img src={process.env.PUBLIC_URL + '/images/yt_logo_rgb_light.png'} alt="YouTube logo" className="logo" />
               </Grid.Column>
               <Grid.Column textAlign={'center'} width={14}>
                  <Input
                     name = "searchTerm"
                     placeholder = "Search..."
                     fluid
                     onKeyDown = {this.keyPress}
                     onChange = {this.handleChange}
                     action = {{
                        icon: 'search',
                        onClick: () => this.search()
                     }}
                  />
               </Grid.Column>
            </Grid.Row>
         </Grid>
     );
  }
}

export default Searchbar;