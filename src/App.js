import React from 'react';
import './index.css';
import './App.css';
import PlayListForm from './components/PlayListForm';
class App extends React.Component {
    render() {
      return (
        <div className="App-header">
           <h1>Music Player</h1>
            <div className="PlayListForm">
                <PlayListForm/>
            </div>
        </div>
      );
    }
}
export default App;
