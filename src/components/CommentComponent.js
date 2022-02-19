import '../App.css';
import React, { useState } from 'react';


const CommentComponent = ({text}) => {



  return (
    <div>
    	<div className="comments">
    		{text}
    		
    	</div>
    </div>
  );
}

export default CommentComponent;
