import React from 'react';
import { Input, Grid, Form } from 'semantic-ui-react';

class Searchbar extends React.Component {
   constructor(props) {
      super(props);

      const sortOptions = [
         {
           key: 'relevance',
           text: 'Relevance',
           value: 'relevance'
         },
         {
           key: 'date',
           text: 'Date',
           value: 'date'
         },
         {
           key: 'rating',
           text: 'Rating',
           value: 'rating'
         }
      ];

      this.state = { searchTerm: '', sortOptions, sort: 'relevance' };
   }

   // handle state updates to fields
   handleChange = e => this.setState({ [e.target.name]: e.target.value })
   handleSelect = (e, { name, value }) => {
      this.setState({ [name]: value.toString() }, () => this.search());
   }

   // if enter is pressed, run the search
   keyPress = (e) => {
      if(e.keyCode === 13){
         this.search();
     }
   }

   search = () => {
      this.props.fetchResults(this.state.searchTerm, this.state.sort);
   }

   render() {

      return (
         <Grid>
            <Grid.Row>
               <Grid.Column width={2} verticalAlign={'middle'}>
                  <img src={process.env.PUBLIC_URL + '/images/yt_logo_rgb_light.png'} alt="YouTube logo" className="logo" />
               </Grid.Column>
               <Grid.Column textAlign={"center"} width={10}>
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
               <Grid.Column width={4}>
                  <Form>
                     <Form.Group inline>
                        <label>Sort</label>
                        <Form.Dropdown
                           options={this.state.sortOptions}
                           defaultValue={this.state.sort}
                           selection
                           name="sort"
                           onChange={this.handleSelect}
                        />
                     </Form.Group>
                  </Form>
               </Grid.Column>
            </Grid.Row>
         </Grid>
      );
   }
}

export default Searchbar;