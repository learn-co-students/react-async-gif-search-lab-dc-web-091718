import React from 'react'

const GifList = (props) => {
  return(
    <div
      className="gif"
      style={{marginTop: '30px'}}>
      {props.gifs.map(gif=>
        <img
          src={gif.images.original.url}
          style={{boxShadow: "25px 25px 50px 0", borderRadius: "25px"}}
      ></img>)}
    </div>
  )
}

export default GifList
