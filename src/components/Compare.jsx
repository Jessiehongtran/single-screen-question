import React from 'react';
import '../styles/Compare.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


export default class Compare extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bgColor: ['white', 'white'],
            textColor: ['black','black']
        }

        this.selected = this.selected.bind(this)
       
    }

    selected(id){
        if (id == 0){
            this.setState({
                bgColor: ['#1C386C', 'white'],
                textColor: ['white', 'black']
            })
        } else {
            this.setState({
                bgColor: ['white', '#1C386C'],
                textColor: ['black', 'white']
            })
        }
    }

    render(){

        return (
            <div className="container">
                <div className="info">
                    <div className="half" onClick={() => this.selected(0)} style={{backgroundColor: this.state.bgColor[0], color: this.state.textColor[0]}}>
                        <h3 className="title">
                            CAT LOVER
                        </h3>
                        <img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg"/>
                        <p className="content">
                            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.
                        </p>
                    </div>
                    <div className="half" onClick={() => this.selected(1)} style={{backgroundColor: this.state.bgColor[1], color: this.state.textColor[1]}}>
                        <h3 className="title">
                            DOG LOVER
                        </h3>
                        <img src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp"/>
                        <p className="content">
                            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.
                        </p>
                    </div>
                </div>
                <Link to="/">
                    <FontAwesomeIcon 
                            icon={faCaretSquareRight} 
                            className="next-icon"
                            
                    />
                </Link>
            </div>
        )
    }
}