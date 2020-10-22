import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tracker = styled.div`
    width: 50%;
    height: 20px;
    margin: 15px auto;
    background: rgb(34,34,34);
    border-radius: 10px;
    box-shadow:inset 0 0 5px #000;
`;

const ProgressInTracker = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #6bccf9;
    border-radius: 8px;
    transition: width 0.3s ease-in-out
`;

export default class ProgressBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    percentageLimits = (min, value, max) => {
        return Math.min(Math.max(min, value), max)
    }

    render(){
        console.log('props in ProgressBar', this.props)
        return (
            <Tracker>
                <ProgressInTracker percentage={this.percentageLimits(this.props.percentage)}/>
            </Tracker>
        )
    }
}

ProgressBar.propTypes = {
    percentage: PropTypes.number,
}