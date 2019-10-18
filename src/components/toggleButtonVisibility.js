import React, { Component } from 'react';

export default class Toggle extends Component{
    constructor(){
        super();
        this.state = {
            playlistName: "",
            artistName: ""
        }
    }
    
    handlePlaylistChange = evt => {
        this.setState({ playlistName: evt.target.value });
    }
    
    handleArtistChange = evt => {
        this.setState({ artistName: evt.target.value });
    }
    
    handleSubmit = () => {
      // if (!this.canBeSubmitted()) {
      //   evt.preventDefault();
      //   return;
      // }
      
      const { playlistName, artistName } = this.state;
      alert(`${artistName} has been added to the ${playlistName} playlist`);
      };
    
      // canBeSubmitted() {
        
      //   const { playlistName, artistName } = this.state;
      //   return playlistName.length > 0 && artistName.length > 0;
      // }
    
      render() {
        const { playlistName, artistName } = this.state;
        const isEnabled = playlistName.length > 0 && artistName.length > 0;
        return (
          <form onSubmit={this.handleSubmit}>
            <input
            id="Musician-name"
              type="text"
              placeholder="Enter playlist name"
              value={this.state.playlistName}
              onChange={this.handlePlaylistChange}
            />
            <br></br>
            <input
            id="musician"
              type="text"
              placeholder="Enter artist name"
              value={this.state.artistName}
              onChange={this.handleArtistChange}
            />
            <button id="Edit" disabled={!isEnabled}>EDIT</button>
            <br></br>
            <br></br>
            <button id="Add" disabled={isEnabled}>ADD</button>
            <button id="Save" disabled={!isEnabled}>SAVE</button>
            <button id="Delete" disabled={!isEnabled}>DELETE</button>
    
          </form>
        );
      }
    }
    
    
  
  
  
