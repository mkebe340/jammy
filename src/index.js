import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import './components/app/App.css'
import './components/playlist/Playlist.css'
import './components/searchBar/SearchBar.css'
import './components/searchResults/SearchResults.css'
import './components/track/Track.css'
import './components/trackList/TrackList.css'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

