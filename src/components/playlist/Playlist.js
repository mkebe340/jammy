import '../playlist/Playlist.css'
import TrackList from '../trackList/TrackList'


const Playlist = () => {
    return (
        <div className="Playlist">
  <input value="New Playlist"/>
  {/* <!-- Add a TrackList component --> */}
  <TrackList />
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
    )
}

export default Playlist;