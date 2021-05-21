import '../app/App.css'
import Playlist from '../playlist/Playlist'
import SearchBar from '../searchBar/SearchBar'
import SearchResults from '../searchResults/SearchResults'

const App = () =>{
  return(
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    {/* <!-- Add a SearchBar component --> */}
    <SearchBar />
    <div className="App-playlist">
      {/* <!-- Add a SearchResults component --> */}
      <SearchResults />
      {/* <!-- Add a Playlist component --> */}
      <Playlist/>
    </div>
  </div>
</div>
  )
}

export default App;