import React from 'react'

const GifList = ({gifs}) => {
	return gifs.map(gif=> {
		console.log(gif.images.original.url)
		return (<img src={gif.images.original.url} alt={gif.title} />)
	})
} 

export default GifList
