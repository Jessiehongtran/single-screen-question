import React from 'react';
import '../styles/Question.scss'

export default class QuizQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: "Halloween's origins date back to this ancient festival.",
            answers: [
                "Roman festival of Halloween",
                "Celtic festival of Samhain",
                "Viking Festival of Hallow's Eve",
                "Greek festival of Autumn"
            ]
        }
    }

    onChangeAnswer(ans){
        console.log('clicked', ans)
    }

    render(){
        const { question, answers } = this.state

        return (
            <div className="question-container">
                <span className="question">{question}</span>
                <img className="image" src="https://nacolorado.org/cospgs/wp-content/uploads/2020/03/placeholder.png"/>
                <ul>
                    {answers.length > 0
                    ? answers.map(answer => <li  onClick={() => this.onChangeAnswer(answer)}>
                        <input 
                        type="radio"
                        value={answer} 
                        // name={each.questionID}
                        // onChange={e => this.onChangeAnswer(e)}
                        />
                        <span>{answer}</span>
                    </li>)
                    : null}
                </ul>
            </div>
        )
    }
}