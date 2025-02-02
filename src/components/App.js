import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

export default class App extends Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        }
        );
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>imageSearch</h1>
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    Found: {this.state.images.length} images
                    <ImageList images={this.state.images} />
                </div>
            </div>
        )
    }
}
