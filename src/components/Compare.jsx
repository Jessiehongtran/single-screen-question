import React from 'react';
import '../styles/Compare.scss';


export default class Compare extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

       
    }

    render(){

        return (
            <div className="container">
                <div className="info">
                    <div className="half">
                        <h3 className="title">
                            SED MAGNA IPSUM FAUCIBUS
                        </h3>
                        <img src="https://html5up.net/uploads/demos/massively/images/pic02.jpg"/>
                        <p className="content">
                            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.
                        </p>
                    </div>
                    <div className="half">
                        <h3 className="title">
                            PRIMIS EGET IMPERDIET LOREM
                        </h3>
                        <img src="https://html5up.net/uploads/demos/massively/images/pic03.jpg"/>
                        <p className="content">
                            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}