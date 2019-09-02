import React, { Component } from 'react'

export default class ImageCard extends Component {
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    }
    state = { spans: 0 };
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        const spans = Math.ceil(this.imageRef.current.clientHeight/10);
        this.setState({ spans });
    }
    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        )
    }
}
