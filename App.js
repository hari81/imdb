import React from 'react';
import imdb from 'fetch-api';
import {Table,Button,Jumbotron,Container} from 'reactstrap';
import {fetch} from 'fetch-api';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', items:''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const mv=this.state.value;
   

  const imdb = require('imdb-api');
  
    imdb.get(this.state.value).then(
     result=>this.setState({items:result})
        
      );
      
    event.preventDefault();
  }
  
  render() {
  
    return (
     <div>





<Container >
        <Jumbotron>
          <h1>IMDB</h1>
          <p>Movies,Shows and Series</p>
        </Jumbotron>
      </Container>
     <form onSubmit={this.handleSubmit}>  
     <center>   <label><br/>
          <input type="text"  value={this.state.name} placeholder='Enter a movie name' onChange={this.handleChange} />
        </label>
        <Button color="primary" size='sm'>Submit</Button></center>
            
      </form>
      
     <center> <h2>{this.state.value}</h2></center>
      <Table striped>
        
        <thead>
          <tr>
            <th>Actors</th>
            <th>Awards</th>
            <th>Director</th>
            <th>Country</th>
            <th>Rating</th>
            <th>Type</th>
            <th>Genres</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td>{this.state.items.actors}</td>
            <td>{this.state.items.awards}</td>
            <td>{this.state.items.director}</td>
            <td>{this.state.items.country}</td>
            <td>{this.state.items.rating}</td>
            <td>{this.state.items.type}</td>
            <td>{this.state.items.genres}</td>
          </tr>
          </tbody>
          </Table>
      
          
      </div>
    );
  
    
  
}
  
    
    
  }

export default App;