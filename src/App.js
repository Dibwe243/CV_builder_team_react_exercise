
import React, { Component } from 'react';
import musician from './musician';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      musicians: [
        {
          id: 1,
          name: "artist 1",
          display: true
        },
        {
          id: 2,
          name: "Artist 2",
          display: true
        },
        {
          id: 3,
          name: "Artist 3",
          display: true
        },
        {
          id: 4,
          name: "Artist 4",
          display: true
        },
        {
          id: 5,
          name: "Artist 5",
          display: true
        },
        {
          id: 6,
          name: "Artist 6",
          display: true
        },
        {
          id: 7,
          name: "Artist 7",
          display: true
        },
        {
          id: 8,
          name: "Artist 8",
          display: true
        },
        {
          id: 9,
          name: "Artist 9",
          display: true
        },
        {
          id: 10,
          name: "Artist 10",
          display: true
        },
        {
          id: 11,
          name: "Artist 11",
          display: false
        },
        {
          id: 12,
          name: "Artist 12",
          display: false
        },
        {
          id: 13,
          name: "Artist 13",
          display: false
        },
        
      ]
    };
  }

  render() {
    const artistToRender = this.state.musicians.filter(artist => artist.display);
    return (
      <div>
        <musician name={this.state.name} />
        <ul>
          {
            artistToRender.map((el,i)=> {
              return (<li key={el.id}>{el.name}</li>)           
          }).filter((e,k) =>  k < 10)
          }
        </ul>
      </div>
    );
  }
}

export default App;