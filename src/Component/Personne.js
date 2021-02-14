import React, { Component } from 'react';
import "./personne.css"

class Personne extends Component {
  
    state = {
        nom: "Amira",
        bio: "Checkpoint State",
        profession: "FullStack Web Developper",
        image : "https://image.freepik.com/vecteurs-libre/icone-profil-personnes_24877-40756.jpg",
      }
    
      // componentDidMount
      componentDidMount() {
        console.log("Personne Component did mount")
      }
    
      // componentWillUnmount
      componentWillUnmount() {
        console.log("Personne Component wil unmount")
      }
    
      // componentDidUpdate
      componentDidUpdate(prevprops, prevstate) {
        console.log("Personne Component did update")
        console.log(prevprops, prevstate)
      }
    
      render() {
        console.log("render")
        return (
          <div className="card">
            <h2 className="title">hello {this.state.nom}</h2>;
            <img src={this.state.image} className="photo"/> ;
            <h2 className="title">Profession: {this.state.profession}</h2>;
            <h2 className="title">Bio: {this.state.bio}</h2>;
          </div>
        )
      }
    }
    

export default Personne;