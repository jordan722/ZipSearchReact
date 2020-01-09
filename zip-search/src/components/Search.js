import React, {Component} from 'react';
import axios from 'axios';
import CityCard from './CityCard';

class Search extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: [],
      zip: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      zip: event.target.value
    })

    // get Zip Info from API only if zip code is proper length
    // if statement added to reduce API calls
    if(event.target.value.length === 5){
      axios.get("http://ctp-zip-api.herokuapp.com/zip/" + event.target.value)
        .then(response => {
          console.log(response.status);
          if(response.status === 200){
            this.setState({
              data: response.data
            });
            console.log(this.state.data);
          }
        })
        .catch(this.setState({data: []}))
    }
    else{
      this.setState({
        data: []
      })
    }
  }


  render(){
    return(
      <div style={{}}>
        <h2> Enter Zip Code Below </h2>
        <form>
          <input name="zip" type="text" onChange={this.handleChange} value={this.state.zip} />
        </form>
        {this.state.data.length != 0 ? (
          <div>
            {this.state.data.map((item,key) =>
              <CityCard key={key }{...item} />
            )}
          </div>
        ) :
        (
          <div class="card">
          <center>No Results Found</center>
          </div>
        )

        }

      </div>

      );
  }
}

export default Search;
