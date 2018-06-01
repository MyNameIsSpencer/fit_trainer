import React, { Component } from 'react';

const Youtuber = (props) => {
  return(
    <div className="youtuber">
      <iframe width="325" height="250"
        src={props.url}>
      </iframe>
      <div className="youtube-righter">
        <h2>{props.title}</h2>
        <hr/>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Youtuber;
