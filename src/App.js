import React, { Component } from "react";
import Musicians from "./Musician";
import "./App.css";
import PlayListForm from "./form";


class App extends Component {
  constructor(props) {
    super(props);
    
    this.artistClicked = this.artistClicked.bind(this);
    this.DisableInput = this.DisableInput.bind(this);
    this.addSaveDisabled = this.addSaveDisabled.bind(this);

    this.state ={
      name: ""
    };
  }

  // find and return artist name
  artistClicked(e, name) {
    e.preventDefault()
    this.setState({
      name: name
     
   });
   this.DisableInput();
   this.addSaveDisabled();
  }
  //Readonly
  
  DisableInput() {
    this.setState( {disabled: !this.state.name} )
  } 
  
  addSaveDisabled(){
    this.setState( {disabled: !this.state.name} )
  }
 
  render() {
    return (
      <div>
        <ul>
          {Musicians
            .map((musician, index) => {
              return (
                <li
                  key={index}
                  onClick={(e) => {
                  this.artistClicked(e, musician.name);
                  
                  }}
                >
                  {musician.name}
                </li>
                
              );
              
            })
            .filter((musician, index) => index < 10)}
        </ul>
        <PlayListForm name={this.state.name}
         />
      </div>
    );
  }
}

export default App;