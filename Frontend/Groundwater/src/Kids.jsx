import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Kids() {
    const quizData = [
        { questionText: "Wat_r", answerOption: [
            { answerText: "r", isCorrect: false },
            { answerText: "e", isCorrect: true },
            { answerText: "a", isCorrect: false },
            { answerText: "p", isCorrect: false }
        ]},
        { questionText: "W_ll", answerOption: [
            { answerText: "g", isCorrect: false },
            { answerText: "j", isCorrect: false },
            { answerText: "s", isCorrect: false },
            { answerText: "e", isCorrect: true }
        ]},
        { questionText: "Oce_n", answerOption: [
            { answerText: "z", isCorrect: false },
            { answerText: "a", isCorrect: true },
            { answerText: "y", isCorrect: false },
            { answerText: "c", isCorrect: false }
        ]},
        {
            questionText:"Eco_ystem",
            answerOption:[
                {answerText:"g",isCorrect:false},
                {answerText:"j",isCorrect:false},
                {answerText:"s",isCorrect:true},
                {answerText:"e",isCorrect:false}
            ]
        },
        {
            questionText:"Irri_ation",
            answerOption:[
                {answerText:"f",isCorrect:false},
                {answerText:"j",isCorrect:false},
                {answerText:"y",isCorrect:false},
                {answerText:"g",isCorrect:true}
            ]
        },
        {
            questionText:"Eva_oration",
            answerOption:[
                {answerText:"p",isCorrect:true},
                {answerText:"d",isCorrect:false},
                {answerText:" l",isCorrect:false},
                {answerText:"z",isCorrect:false}
            ]
        },
        {
            questionText:"Aqui_er",
            answerOption:[
                {answerText:"t",isCorrect:false},
                {answerText:"f",isCorrect:true},
                {answerText:" y",isCorrect:false},
                {answerText:"z",isCorrect:false}
            ]
        },
        {
            questionText:"Stre_m",
            answerOption:[
                {answerText:"e",isCorrect:false},
                {answerText:"a",isCorrect:true},
                {answerText:"b ",isCorrect:false},
                {answerText:"j",isCorrect:false}
            ]
        },
        {
            questionText:"Conde_sation",
            answerOption:[
                {answerText:"n",isCorrect:true},
                {answerText:"p",isCorrect:false},
                {answerText:"h",isCorrect:false},
                {answerText:"z",isCorrect:false}
            ]
        },
        {
            questionText:"Reser_oir",
            answerOption:[
                {answerText:"r",isCorrect:false},
                {answerText:"q",isCorrect:true},
                {answerText:"v ",isCorrect:false},
                {answerText:"n",isCorrect:false}
            ]
        },


    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
            <h1 className="text-center mb-4">Missing Letter</h1>
            {currentQuestion < quizData.length ? (
                <div className="card p-4 shadow-lg w-75 text-center">
                    <h3 className="mb-4">{quizData[currentQuestion].questionText}</h3>
                    <div className="row">
                        {quizData[currentQuestion].answerOption.map((answerOption, index) => (
                            <div key={index} className="col-md-6 mb-3">
                                <button className="btn btn-primary w-100 py-3" onClick={() => handleAnswer(answerOption.isCorrect)}>
                                    {answerOption.answerText}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="card p-4 shadow-lg text-center w-50">
                    <h2>Your score is {score} out of {quizData.length}</h2>
                    <button className="btn btn-success mt-3">
                        <Link to='/' className="text-white text-decoration-none">Home</Link>
                    </button>
                </div>
            )}
        </div>
    );
}

export default Kids;
