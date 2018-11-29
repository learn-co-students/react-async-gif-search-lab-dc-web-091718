import React, { Component } from 'react'

export default class GifSearch extends Component {
	handleSearchSubmit = (e) => {
		e.preventDefault()
		this.props.onSearchSubmit(e.target.firstChild.value)
	}

	render() {
		return (
			<form onSubmit={this.handleSearchSubmit}>
				<input></input>
				<button type='submit'>Find Gifs</button>
			</form>
		)
	}
}
