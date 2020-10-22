import React from 'react';
import styled from 'styled-components';
import ProgressBar from './components/ProgressBar';
import Color from './components/color';
import { Route, Link } from 'react-router-dom';
import QuizQuestion from './components/QuizQuestion';
import Video from './components/Video';
import ImageText from './components/ImageText';
import Compare from './components/Compare';
import './App.css';

const Fragment = styled.div`
  display: flex;
  justify-content:center;
`;


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      percentage: 25
    }
  }

  render(){
    return (
      <>
      {/* <Fragment>
        <ProgressBar percentage={this.state.percentage}/>
        <button onClick={() => this.setState({percentage: this.state.percentage + 25})}>Next</button>
      </Fragment> */}
       <Route 
        exact path = "/"
        component = {function(){ return <>
          <h1>Let's explore different forms</h1>
          <ul>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/video">Video</Link></li>
            <li><Link to="/imageText">Image and Text</Link></li>
            <li><Link to="/compare">Compare</Link></li>
          </ul>
        </>}}
      />
      <Route 
        path = "/quiz"
        component = {QuizQuestion}
      />
      <Route 
        path = "/video"
        component = {Video}
      />
      <Route 
        path = "/imageText"
        component = {ImageText}
      />
      <Route 
        path = "/compare"
        component = {Compare}
      />
      </>
    );
  }
}

export default App;
