
import React from 'react'

const Placeholder = (props) => {
  return (
    <div>
      <article className="journal">
      <div className="main-image-container">
      <img className= 'main-image' src={props.img.src} alt={props.img.alt} />
      </div>
        <div>
        <img  className="marker" src="src/assets/marker.png" alt="marker" width={'20px'} />
          <span >{ props.country}</span>
          <a href={props.googleMapsUrl}
        > View on google maps</a>
        <h2>{props.title}</h2>
          <p>{props.date}</p>
        <p>{props.description} </p>
        </div>
    
      </article>
      </div>
  )
}

export default Placeholder



