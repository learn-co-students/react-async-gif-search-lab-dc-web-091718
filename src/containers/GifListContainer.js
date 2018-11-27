import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor () {
        super();
        this.state = {
            gifs: [],
        }
    }

    fetchGifs = (searchTerm) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0,3)
            });
        });
    };

    componentDidMount() {
        this.fetchGifs("JS");
    }

    render () {
        return ( 
            <ul className="container">
                <GifSearch search={this.fetchGifs} />
                {this.state.gifs.map(gif => <GifList gif ={gif} key={gif.id} />)}
            </ul>
        )};
};