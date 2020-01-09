import React, {Component} from 'react';
import axios from 'axios';

class Search extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggle: true,
      data: [],
      zip: ''
    };

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  getData(event){
    event.preventDefault();
    axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.state.zip)
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

  handleChange(event){
    this.setState({
      zip: event.target.value
    })
  }


  render(){
      return(
        <div>
          <h2> Enter Zip Code Below </h2>
          <form>
            <input name="zip" type="text" onChange={this.handleChange} value={this.state.zip} />
            <button onClick={this.getData}> Get Data</button>
          </form>
          {this.state.data[0] ? (
            <li> {this.state.data[0].City} </li>
          ) :
          (
            "No Results"
          )

          }

        </div>

      );
  }
}

export default Search;
