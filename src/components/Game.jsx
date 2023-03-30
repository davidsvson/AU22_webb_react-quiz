import { useState } from "react";

const Game = () => {
    const questions = getQuestions();

    const [currentQuestion, setCurrentQuestion] = useState(0);
 
    let question = questions[currentQuestion];

    console.log(question.answers);

    const options = question.answers.map((answer, index) => (
            <p className="option" key={index}>
                <label>
                    <input type="radio" /> {answer}
                </label>
            </p>
        )
    )    

    console.log(options);

    return (
        <section>
            <h3>{question.question}</h3>
            {options}
            <button>Answer</button>
        </section>
    )
}

const getQuestions = () => {
    return [
        {
            question: 'När är Julafton?',
            answers: ['24 maj', '24 dec', '3 maj' ],
            correct: 1
        },
        {
            question: 'Vilket är sista datum för inlämningsuppgiften?',
            answers: ['24 maj', '24 dec', '14 april' ],
            correct: 2
        },
        {
            question: 'Vad är bäst?',
            answers: ['Teams', 'Discord', 'Zoom' ],
            correct: 2
        },
        {
            question: 'Vilket är bäst?',
            answers: ['MacOS', 'Windows', 'Linux' ],
            correct: 0
        }
    ]
}



export default Game;