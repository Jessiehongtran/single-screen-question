import React from 'react';
import '../styles/Video.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

export default class Video extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="video-container">
                <span className="text">Wanna see trailer of Raya and the Last Dragon?</span>
                <div className="vide-background">
                    {/* <iframe className="video" width="560" height="315" src="https://secure.disney.com/embed/5b22dd01aab08ebd6b4f2a72?domain=video.disney.com"  frameborder="0" allowfullscreen scrolling="no"></iframe> */}
                    <iframe className="video" width="760" height="515" src="videos/Sphero.mp4"  frameborder="0" allowfullscreen scrolling="no"></iframe>
                </div>
                <br/><a href="https://video.disney.com/watch/raya-and-the-last-dragon-official-teaser-trailer-5b22dd01aab08ebd6b4f2a72">Raya and the Last Dragon | Official Teaser Trailer</a>
                {/* <span>Another video</span>
                <video width="500" height="500" controls>
                    <source src="videos/Sphero.mp4" type="video/mp4"/>
                </video> */}
                <Link to="/imageText">
                    <FontAwesomeIcon 
                            icon={faCaretSquareRight} 
                            className="next-icon"
                            
                    />
                </Link>
            </div>
        )
    }
}