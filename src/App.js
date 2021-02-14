import './App.css';
import React, { Component } from 'react';
import Personne from './Component/Personne';
import { Button } from "react-bootstrap";

class App extends Component {

state = {
  show: false
}

handleShow = () => {
  this.setState({
    show: !this.state.show
  })
}

render() {
  return (
    <div className="App" >
        <Button variant="primary" size="lg" blocks
        onClick={this.handleShow}
        className="toggle">Toggle</Button>
      {this.state.show &&
        <Personne testprops="hello props" />
      }
    </div>
  );
}
}
export default App;

