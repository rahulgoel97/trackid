import '../App.css';
import React, { useState, useEffect } from 'react';
import VideoCard from './videoCard.js'
import axios from "axios";
import Toggle from 'react-toggle'
import { supabase } from './supabaseClient'


// Components

const VideoCardGrid = ({query, initSearchState}) => {


// Randomize initial grid
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


// Variable for API data
let [events, setEvents] = useState([]);

let [search, setSearch] = useState("");
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
		
		if(youtube==null){

		}
		else{
			setEvents(youtube)
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
		console.log("");
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

	if(titleData==null){

	}
	else{
		setEvents(titleData)
	}

}


// Testing an API
React.useEffect(()=>{
	getData();
	axios.get("https://laskzafaqxkbjowhfkfq.supabase.co/rest/v1/youtube",{
		headers:{
			'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2t6YWZhcXhrYmpvd2hma2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTk0OTEsImV4cCI6MTk2MDAzNTQ5MX0.VgWbVMR-cwRe7Q_wmQgn2z0XaLVYQ_Ux94GlWa2nmIw',
			'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2t6YWZhcXhrYmpvd2hma2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTk0OTEsImV4cCI6MTk2MDAzNTQ5MX0.VgWbVMR-cwRe7Q_wmQgn2z0XaLVYQ_Ux94GlWa2nmIw'
		}
	}
		).then((res)=>{
		setEvents(res.data)
	});
},[]);



const toggleSearch = (e) =>{

	console.log(e.target.checked)

	if(e.target.checked==true){
		setSearchComments(1)
	}
	else{
		setSearchComments(0)
	}

}

const searchQuery = (e) =>{
	
	try{

			setSearch(e.target.value)	
			

			if(searchComments==0){
				
					queryData(e.target.value)
			}
			else if(searchComments==1){
		
					queryTracks(e.target.value)
				}
		}
	catch{
			setSearch(e)
			if(searchComments==0){
				
					queryData(e.target.value)
			}
			else if(searchComments==1){
			
				queryTracks(e.target.value)
			}
		}
	}


  return (

  	<div>

  		<div className="searchBarDiv">

		  		<input className="searchbar" 
		                 type="text" 
		                 name="name"
		                 placeholder={search}
		                 onChange = {searchQuery}
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
		         
					  
				 

		</div>

		


    		<div className="flex-grid">
    				


   	 			{events.map(block=>VideoCard(block))}


    		</div>




    </div>
  );
}


export default VideoCardGrid;
