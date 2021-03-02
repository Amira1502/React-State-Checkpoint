import React, { Component } from 'react';
import "./personne.css"

class Personne extends Component {
  constructor (props) {

    console.log("constructor()");
    super (props);
  
    this.state = {
        nom: "Amira",
        bio: "Checkpoint State",
        profession: "FullStack Web Developper",
        image : "https://image.freepik.com/vecteurs-libre/icone-profil-personnes_24877-40756.jpg",
        intervall: null,
        timer: 0,

      };
    }
    
      // componentDidMount
      componentDidMount() {
        console.log("Personne Component did mount()");
        this.setState({
          intervall: setInterval (()=>{
            this.setState({ timer:this.state.timer + 1 });
          }, 1000),
        })

      }
    
      // componentWillUnmount
      componentWillUnmount() {
        console.log("Personne Component wil unmount")
      }
    
      // componentDidUpdate
      componentDidUpdate() {
        console.log("Personne Component did update");
     }
    
      render() {
        console.log("render")
        return (
          <div className="card">
            <h2 className="title">Hello </h2>
            <h3 className="description"> {this.state.nom}</h3>
            <img src={this.state.image} className="photo"/> 
            <h2 className="title">Profession: </h2>
            <h3 className="description">{this.state.profession}</h3>
            <h2 className="title">Bio: </h2>
            <h3 className="description">{this.state.bio}</h3> 
            <h2 className="title">Timer: </h2>
            <h3 className="description">{this.state.timer}</h3> 
          </div>
        )
      }
    }
    

export default Personne;