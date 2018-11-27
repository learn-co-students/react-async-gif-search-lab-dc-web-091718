import React from 'react';

export default class GifSearch extends React.Component  {
    state= {
        query: ""
    }

    handleSubmit = event  => {
        event.preventDefault();
        this.props.search(this.state.query);
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label >Search:</label>
                <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                <input type="submit"/>
            </form>
    )};
}