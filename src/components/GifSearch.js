import React from 'react'

const GifSearch = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSearchSubmit(event)
  }

  return(
    <form onSubmit={handleSubmit} >
      <label>Search string</label>
      <input type="text" onChange={(event) => props.onSearchChange(event.target.value)}></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default GifSearch