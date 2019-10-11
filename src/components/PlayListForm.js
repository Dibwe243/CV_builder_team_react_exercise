import React, { Component } from "react";
import '../AppForm.css'

class PlayListForm extends React.Component {
    render() {
        return (
            <div>
            <form>
                <input type="text" id="Playlist-name" placeholder="Name of the playlist"></input>
                <button id="Edit">Edit</button>
                <br></br>
                <input type="text" id="Musician-name" placeholder="Musician's name"></input>
            <br></br>
            <button id="Add">Add</button>
            <button id="Save">Save</button>
            <button id="Delete">Delete</button>
            </form>
            <form id="musician">
          
        </form>
        </div>
        )
    }
}
export default PlayListForm;