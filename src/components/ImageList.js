import React, { Component } from 'react'

export default class ImageList extends Component {
    render() {
        return (
            <div>
                {this.props.images.map(({description, id, urls}) => {return <img alt={description} key={id} src={urls.regular}/>})}
            </div>
        )
    }
}
