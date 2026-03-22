import '../App.css';
import React, { useState } from 'react';
import VideoCard from './videoCard.js'
import axios from "axios";
import Toggle from 'react-toggle'
import { supabase } from './supabaseClient'


const VideoCardGrid = ({query, initSearchState}) => {

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

let [events, setEvents] = useState([{
        "title": "Carl Cox Boiler Room Ibiza Villa Takeovers DJ Set",
        "link": "vy-k0FopsmY",
        "img": "https://i.ytimg.com/vi/vy-k0FopsmY/hqdefault.jpg"
    },
    {
        "title": "Solomun Boiler Room DJ Set",
        "link": "bk6Xst6euQk",
        "img": "https://i.ytimg.com/vi/bk6Xst6euQk/hqdefault.jpg"
    }]);

let [search, setSearch] = useState("");
let [searchComments, setSearchComments] = useState(initSearchState);
let [searchStatus, setSearchStatus] = useState(null);

async function getData() {
  let { data:youtube, error } = await supabase.from('youtube').select('*')
  youtube = shuffle(youtube)
  setEvents(youtube)
}

async function queryData(e) {
  let { data:youtube, error } = await supabase
    .from('youtube').select('*').textSearch('title', `${e}`)
  if (youtube == null || youtube.length === 0) {
    setSearchStatus('none')
  } else {
    setEvents(youtube)
    setSearchStatus('found')
  }
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

async function queryTracks(e) {
  let { data:youtube, error } = await supabase
    .from('comments').select('*').textSearch('text', `${e}`).select('id_val')

  var queryString = ''
  try {
    for (const yt of youtube.filter(onlyUnique)) {
      queryString += yt.id_val + " | "
    }
  } catch { console.log(""); }

  queryString = queryString.substring(0, queryString.length - 2);

  let { data:titleData, titleError } = await supabase
    .from('youtube').select('*').textSearch('link', `${queryString}`)

  if (titleData == null || titleData.length === 0) {
    setSearchStatus('none')
  } else {
    setEvents(titleData)
    setSearchStatus('found')
  }
}

React.useEffect(()=>{
  getData();
  axios.get("https://fnpylpuqrgjudgriiokd.supabase.co/rest/v1/youtube", {
    headers:{
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZucHlscHVxcmdqdWRncmlpb2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjUzMTEsImV4cCI6MjA4OTEwMTMxMX0.jzGNBtZXCuPYUKn0EKShuvQD5ukhIsJp86-OpI5chPE',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZucHlscHVxcmdqdWRncmlpb2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MjUzMTEsImV4cCI6MjA4OTEwMTMxMX0.jzGNBtZXCuPYUKn0EKShuvQD5ukhIsJp86-OpI5chPE'
    }
  }).then((res) => { setEvents(res.data) });
}, []);

const toggleSearch = (e) => {
  setSearchComments(e.target.checked ? 1 : 0)
  setSearchStatus(null)
}

const searchQuery = (e) => {
  setSearch(e.target.value)
  setSearchStatus(null)
}

const handleSearch = () => {
  try {
    if (searchComments == 0) queryData(search)
    else if (searchComments == 1) queryTracks(search)
  } catch(err) {
    console.log("Search error: ", err)
  }
}

const handleKeyDown = (e) => {
  if (e.key === 'Enter') handleSearch()
}

  return (
    <div>
      <div className="searchBarDiv">

        <input
          className="searchbar" 
          type="text" 
          name="name"
          placeholder="Search 10K+ sets..."
          value={search}
          onChange={searchQuery}
          onKeyDown={handleKeyDown}
        />

        {searchStatus === 'found' && (
          <span className="searchStatus found">✓ Found!</span>
        )}
        {searchStatus === 'none' && (
          <span className="searchStatus none">✗ No results found</span>
        )}

        <div className="toggleButtonDiv">
          <label>
            <Toggle
              defaultChecked={searchComments}
              icons={false}
              onChange={toggleSearch}
            />
            <span className="button-label">Sets    Tracks</span>
          </label>
          <button className="searchButton" onClick={handleSearch}>
            Search
          </button>
        </div>

      </div>

      <div className="flex-grid">
        {events.map(block => VideoCard(block))}
      </div>

    </div>
  );
}

export default VideoCardGrid;