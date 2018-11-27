import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor () {
        super();
        this.state = {
            gifs: [],
            searchTerm: "JS"
        }
    }

    fetchGifs = () => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                gifs: json.data.slice(0,3)
            });
        });
    };

    componentDidMount() {
        this.fetchGifs();
    }

    render () {
        return ( 
            <div>Gif Container
                <GifSearch />
                <GifList />
            </div>
        )};
};