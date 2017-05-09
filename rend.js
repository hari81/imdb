import React from 'react';
class Rend extends React.Component{
    handleSubmit(event) {
    const imdb = require('imdb-api');
   const movies=imdb.get(this.state.value).then(result=>this.setState({items:result}));
    event.preventDefault();
  }
    render(){
        return(
         <div>{this.state.value}</div>
        );
    }
}
export default Rend;
/* hari's comment */
