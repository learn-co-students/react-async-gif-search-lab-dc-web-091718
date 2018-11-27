import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


const URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      threeGifs: [],
      searchTerm: ""
    }
  }

  componentDidUpdate() {
    fetch(URL+this.state.searchTerm+API_KEY)
    .then(res=> res.json())
    .then(result =>
      this.setState({threeGifs: [ result.data[0], result.data[1], result.data[2] ]}))
  }

  onSubmitSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  render(){
  return(
    <div>
      <GifSearch submitSearchTerm={this.onSubmitSearchTerm}/>
      {<GifList gifs={this.state.threeGifs} />}
    </div>
  )}
}

export default GifListContainer
