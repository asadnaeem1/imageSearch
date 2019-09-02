import React, { Component } from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

export default class ImageList extends Component {
    render() {
        return (
            <div className='image-list'>
                {this.props.images.map((image) => {return <ImageCard key={image.id} image={image}/>})}
            </div>
        )
    }
}
