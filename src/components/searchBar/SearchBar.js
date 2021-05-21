import '../searchBar/SearchBar.css'
import React, { useEffect, useState } from 'react';
import axios from "axios";
import spotifyWebApi from "spotify-web-api-node"

const spotifyApi = new spotifyWebApi ({
    clientId:"8B945ef10ea24755b83ac50cede405a0",
})
const SearchBar = () => {
        const [search, setSearch] = useState('');
        const [searchResults, setSearchResults] = useState([])

        useEffect(()=>{
            if(!search){
                return setSearchResults([])
            }
            else{
                spotifyApi.searchTracks(search).then(res =>{
                    console.log('resp', res)
                })
            }

        },[search])
    return (
        <div className="SearchBar">
            <input type='search' placeholder="Enter A Song, Album, or Artist"
             value={search} onChange={e => setSearch(e.target.value)}/>
            <button className="SearchButton">SEARCH</button>
        </div>
    )
}

export default SearchBar;