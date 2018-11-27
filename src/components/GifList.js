import React from 'react'

const GifList = (props) => {
  console.log(props.gifs)
  return(
    <div> {props.gifs.map(gif => {
      return(
      <ul key={gif.url}>
      <li key={gif.url}> <img key={gif.url} src={gif.url} alt="gif"/></li>
      </ul>
    )
    }
  )}
    </div>
  )
}

export default GifList
