import '../App.css';
import React, { useState, useEffect } from 'react';
import VideoCard from './videoCard.js'
import axios from "axios";
import Toggle from 'react-toggle'
import { supabase } from './supabaseClient';
import toast, { Toaster } from 'react-hot-toast';


// Components

const VideoCardGrid = ({query, initSearchState}) => {



// Variable for API data
let [events, setEvents] = useState([]);

let [search, setSearch] = useState("🔍 Search 1,642 sets...");
let [searchComments, setSearchComments]= useState(initSearchState);



async function getData() {
		
		let { data:youtube, error } =  await supabase
		.from('youtube')
		.select('*')
		setEvents(youtube)
 }

async function queryData(e) {

	let { data:youtube, error } =  await supabase
		.from('youtube')
		.select('*')
		.textSearch('title', `${e}`)
		
		if(youtube==null || youtube.length==0){
			toast.error("😔 Couldn't find that one, try again",
			{
				style: {
			      borderRadius: '10px',
			      background: '#111',
			      color: '#fff',
			    },
			})
		}
		else{
			setEvents(youtube)
			toast.success('Found!',
			{
				style: {
			      borderRadius: '10px',
			      background: '#111',
			      color: '#fff',
			    },
			})

		}

}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

async function queryTracks(e) {

	let { data:youtube, error } =  await supabase
		.from('comments')
		.select('*')
		.textSearch('fts', `${e}`)
		.select('id_val')
		

	var queryString = ''

	try{
	
		for (const yt of youtube.filter(onlyUnique)){
			
			queryString+=yt.id_val + " | "
		}
	}
	catch{
		console.log("Error, try again!");
	}

	queryString = queryString.substring(0, queryString.length - 2);

	

	let { data:titleData, titleError } =  await supabase
		.from('youtube')
		.select('*')
		.textSearch('link', `${queryString}`)
		


	

	//let { data:youtube, error } =  await supabase
	//	.from('comments')
	//	.textSearch('text', `${e}`)
	//	.select(`
	//		link,
	//		youtube(

	//			title,
	//			link,
	//			img
	//		)
	//	`)


	if(youtube==null || titleData.length==0){
			toast.error("😔 Couldn't find that one, try again",

			{
				style: {
			      borderRadius: '10px',
			      background: '#111',
			      color: '#fff',
			    },
			})
		}
		else{
			setEvents(titleData)
			toast.success('Found!',
			{
				style: {
			      borderRadius: '10px',
			      background: '#111',
			      color: '#fff',
			    },
			})

		}

}


	


const toggleSearch = (e) =>{


	if(e.target.checked==true){
		setSearchComments(1)
	}
	else{
		setSearchComments(0)
	}

}

const setSearchQuery = (e)=>{
	setSearch(e.target.value)
}


const searchQuery = () =>{
	

	var e = search
	
	try{
			

			if(searchComments==0){
				
					queryData(e)
			}
			else if(searchComments==1){
		
					queryTracks(e)
				}
		}
	catch{
			setSearch(e)
			if(searchComments==0){
				
					queryData(e)
			}
			else if(searchComments==1){
			
				queryTracks(e)
			}
		}
	}


  return (

  	<div>
  		<Toaster />
  		<div className="searchBarDiv">
  				
		  		<input className="searchbar" 
		                 type="text" 
		                 name="name"
		                 placeholder={search}
		                 onChange = {setSearchQuery}
		                 
		                  />

		        <div className="toggleButtonDiv">
		        <label>
						  <Toggle
						  defaultChecked = {searchComments}
						  icons={false}	 				    
						  onChange={toggleSearch} />
						  <span className="button-label">Sets    Tracks</span>
				</label>
				</div>
		         

		         <button 
		         	className="search-submit-button"
		         	type="button"
		         	onClick = {searchQuery}>
		         		Search

		         </button>
				
				 

		</div>

		


    		<div className="flex-grid">
    				


   	 			{events.map(block=>VideoCard(block))}


    		</div>




    </div>
  );
}


export default VideoCardGrid;
