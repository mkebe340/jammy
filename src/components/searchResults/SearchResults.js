import '../searchResults/SearchResults.css'
import TrackList from '../trackList/TrackList'



const SearchResults = () => {
    return (
        <div className="SearchResults">
        <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <TrackList />
      </div>
    )
}

export default SearchResults;