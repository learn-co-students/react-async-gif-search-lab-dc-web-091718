import React from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ""
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.submitSearchTerm(this.state.searchTerm)
  }
  render(){
  return(
    <form
      className="form-inline"
      onSubmit={this.onSubmit}>
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        onChange={(event)=> this.setState({searchTerm: event.target.value})}>
      </input>
      <input
        type="submit"
        className="btn btn-primary">
      </input>
    </div>
    </form>
  )}
}

export default GifSearch
