
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const VideoCard = ({title, link, img}) => {



  return (
  	<div>
          	<Link to={`/set/${link}`}>
                    <div className="home-screen-card">

                    	

                		    <div >
                		    
                		    	<img className="artist-pic" src={img}/> 

                		    </div>


                		    <div className="artist-name">


                	    		<p> {title} </p>
                	    	</div>
                	    

                    </div>

            </Link>
    </div>
    	

   
  );
}

export default VideoCard;
