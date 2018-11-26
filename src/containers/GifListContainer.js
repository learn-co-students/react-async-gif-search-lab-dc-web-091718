import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends Component {
  constructor() {
    super()
    this.state={
      gifs: [],
      searchString: "puppy"
    }
  }

  queryString = () => {
    return "http://api.giphy.com/v1/gifs/search?q=" + this.state.searchString + '&api_key=dc6zaTOxFJmzC&rating=g'
  }

  getGifs = () => {
    fetch(this.queryString())
      .then(response => response.json())
      .then(data => {
        this.setState({
          gifs: data.data.slice(0,3)
        })
      })
  }

  componentDidMount() {
    this.getGifs()
  }

  onSearchSubmit = (event) => {
    this.getGifs()
  }

  onSearchChange = (str) => {
    this.setState({searchString: str })
  }

  render() {
    return(
      <div>
        <GifSearch onSearchSubmit={this.onSearchSubmit} searchString={this.state.searchString} onSearchChange={this.onSearchChange}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}

export default GifListContainer