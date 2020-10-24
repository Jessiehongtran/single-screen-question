import React from 'react';
import '../styles/ImageText.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft,faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export default class ImageText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [
                "https://thenationpress.net/en/imgs/2020/08/1597490497blobid0.jpg",
                "https://universityhealthnews.com/media/benefits-of-lime.jpg",
                "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/20/19/istock-1143163513.jpg?width=1200",
                "https://daily.jstor.org/wp-content/uploads/2020/06/the_great_grape_graft_that_saved_wine_forever_1050x700.jpg"
            ],
            toShowImageInd: 0
        }

        this.nextImage = this.nextImage.bind(this)
    }

    nextImage(){
        if (this.state.toShowImageInd + 1 < this.state.images.length){
            this.setState({toShowImageInd: this.state.toShowImageInd + 1})
        }
    }

    preImage(){
        if (this.state.toShowImageInd - 1 >= 0){
            this.setState({toShowImageInd: this.state.toShowImageInd - 1})
        }
    }

    render(){

        const { images, toShowImageInd } = this.state;

        return (
            <div className="container">
                <span className="title">Lorem ipsum dolor sit amet consectetur</span>
                <div className="image_text">
                    <div className="images">
                        <FontAwesomeIcon 
                            icon={faChevronLeft} 
                            className="icon-left"
                            onClick={() => this.preImage()}
                        />
                        <img src={images[toShowImageInd]}/>
                        <FontAwesomeIcon 
                            icon={faChevronRight} 
                            className="icon-right"
                            onClick={() => this.nextImage()}
                        />
                    </div>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
                    </div>

                    
                </div>
                <Link to="/compare">
                    <FontAwesomeIcon 
                            icon={faCaretSquareRight} 
                            className="next-icon"
                            
                    />
                </Link>
            </div>
        )
    }
}