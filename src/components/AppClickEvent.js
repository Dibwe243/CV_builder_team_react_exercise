import React from "react";
import "./AppForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class PlayListForm extends React.Component {
  
  render() {
    
    return (
      <div>
        <form>
          <TextField
            id="edit"
            placeholder="Playlist name"
            //className={classes.textField}
            //value={props.name}
            //onChange={handleChange("name")}
            margin="normal"
          />
          <Button variant="contained" >Edit</Button>
          <br></br>
          <TextField
            id="edit"
            placeholder="Musician"
            value={this.props.name}
            onClick={this.artistClicked}
            margin="normal"
            disabled={(this.props.name)? "disabled" : ""}
            
          />

          <br></br>
          <Button disabled={(this.props.name)? "disabled" : ""} variant="contained">
            ADD
          </Button>
          <Button disabled={(this.props.name)? "disabled" : ""} variant="contained">
            Save
          </Button>
          <Button variant="contained">
            Delete
          </Button>
        </form>
        <form id="musician"></form>
      </div>
    );
  }
}
export default PlayListForm;