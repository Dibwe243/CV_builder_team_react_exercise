import React, { Component } from "react";
import musician from "./musician";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      musicians: [
        {
          id: 1,
          name: "artist 1",
        },
        {
          id: 2,
          name: "Artist 2",
        },
        {
          id: 3,
          name: "Artist 3",
        },
        {
          id: 4,
          name: "Artist 4",
        },
        {
          id: 5,
          name: "Artist 5",
        },
        {
          id: 6,
          name: "Artist 6",
        },
        {
          id: 7,
          name: "Artist 7",
        },
        {
          id: 8,
          name: "Artist 8",
        },
        {
          id: 9,
          name: "Artist 9",
      
        },
        {
          id: 10,
          name: "Artist 10",
        },
        {
          id: 11,
          name: "Artist 11",
        },
        {
          id: 12,
          name: "Artist 12",
          
        },
        {
          id: 13,
          name: "Artist 13",
        },
        {
          id: 14,
          name: "Artist 14"
        }
      ]
    };
  }

  render() {
    const artistToRender = this.state.musicians;
    
    return (
      <div>
        <musician name={this.state.name} />
        <ul>
          {artistToRender
            .map((element, index) => {
              return <li key={element.id}>{element.name}</li>;
            })
            .filter((element, index) => index < 10)}
        </ul>
      </div>
    );
  }
}

export default App;
