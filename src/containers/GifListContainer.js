import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
const QUERY_URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g&q='


export default class GifListContainer extends Component {

	state = {
		gifs: []
	}

	onSearchSubmit = (searchTerm) =>  {
		fetch(QUERY_URL+searchTerm)
			.then(resp=> resp.json())
			.then(json=> this.setState({gifs: json.data}))
	}

	render() {
		return (
			<div>
				<GifSearch onSearchSubmit={this.onSearchSubmit}/> 
				<GifList gifs={this.state.gifs}/>
			</div>
		)
	}

}
