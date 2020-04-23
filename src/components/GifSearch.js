import React from 'react'

class GifSearch extends React.Component {
  state = {
    searchTerm: ""
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.submitSearchTerm(this.state.searchTerm)
  }

  newColor = () => {
    return "green"
    // const searchTerm = this.props.searchTerm

    // if (searchTerm === "") {
    //   return "green"
    // }
    // else if (searchTerm.startsWith("c")) {
    //   return "pink"
    // }
    // else {
    //   return "blue"
    // }
  }

  render(){
    return (
      <form
        className="form-inline"
        onSubmit={this.onSubmit}>
      <div className="form-group">
        <input
          type="text"
          style={{marginBottom: "10px", borderRadius: "10px", height: "20px"}}
          className="form-control"
          onChange={(event)=> this.setState({searchTerm: event.target.value})}>
        </input>

        <br/>

        <input
          type="submit"
          style={{height: "30px", backgroundColor: this.newColor(), color: "white", borderRadius: "25px"}}
          className="btn round button btn-primary">
        </input>
      </div>
      </form>
    )
  }
}

export default GifSearch
