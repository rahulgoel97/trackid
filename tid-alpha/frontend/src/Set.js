import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import NavbarComponent from './components/Navbar.js';
import CommentComponent from './components/CommentComponent.js';
import TopComment from './components/TopComment.js';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import commentdata from './scrapedb_comments.json';
import { supabase } from './supabaseClient'


const Set = () => {

  let [comments, setComments] = useState(["comment1", "comment2", "comment3"]);
  let [topComment, setTopComment] = useState("Loading.....");
  const {link} = useParams();
  const yt_link = "https://www.youtube.com/embed/"+link;

 
  async function getData(link) {
    
    let { data:res, error } =  await supabase
    .from('comments')
    .select('text')
    .eq('id_val', `${link}`)


    try{
    res.sort((a,b)=> b.text.length - a.text.length)
    }
    catch(error){
    console.log(error)
    }
  
    if(res==null){
      setComments(["Try again..."])
    }
    else{
      setComments(res)
      setTopComment(res[0].text)
    }

    

  }
 
  
  
  const filtered_comments = getData(link)



  try{
      let topComment = comments[0].text;
  }
  catch(error){
      let topComment = "Loading...";
  }
  
  
  return (
    <div className="App">
        
      
          <NavbarComponent />



                      <iframe className="yt-vid" 
                                src={yt_link}
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; 
                                autoplay; 
                                clipboard-write; 
                                encrypted-media; 
                                gyroscope; 
                                picture-in-picture" allowfullscreen>
                        </iframe>

                      

                              <div className="best-guess"> Best Guess Tracklist </div>
                              
                              <TopComment text={topComment} />
                      
                  
                      

                          <div className="set-title"> Other comments </div>

                          <p> {comments.map(block=>CommentComponent(block))} </p> 

                      
         
    </div>
  );
}

export default Set;
