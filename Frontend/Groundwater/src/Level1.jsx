import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";

const Level1 = () => {
    const quizData = [
        {
          question: 'What is the primary objective of ground conservation?',
          options: [
            'To promote industrialization',
            'To preserve and restore natural ecosystems',
            'To increase urban areas',
            'To enhance agricultural yields'
          ],
          correctAnswer: 'To preserve and restore natural ecosystems',
        },
        {
          question: 'Which practice involves planting vegetation to reduce soil erosion?',
          options: [
            'Afforestation',
            'Deforestation',
            'Urban sprawl',
            'Land clearing'
          ],
          correctAnswer: 'Afforestation',
        },
        {
          question: 'What is the purpose of contour plowing?',
          options: [
            'To increase soil erosion',
            'To reduce soil erosion on slopes',
            'To expand urban areas',
            'To promote monoculture'
          ],
          correctAnswer: 'To reduce soil erosion on slopes',
        },
        {
          question: 'Which method helps to prevent soil degradation?',
          options: [
            'Overgrazing',
            'Excessive irrigation',
            'Clear-cutting',
            'Cover cropping'
          ],
          correctAnswer: 'Cover cropping',
        },
        {
          question: 'What role do wetlands play in ground conservation?',
          options: [
            'They increase pollution',
            'They contribute to habitat loss',
            'They filter pollutants and support biodiversity',
            'They enhance soil erosion'
          ],
          correctAnswer: 'They filter pollutants and support biodiversity',
        },
        {
          question: 'Which technique involves creating barriers to control wind erosion?',
          options: [
            'Strip mining',
            'Windbreaks',
            'Overharvesting',
            'Land reclamation'
          ],
          correctAnswer: 'Windbreaks',
        },
        {
          question: 'What is the main benefit of using terracing on hilly land?',
          options: [
            'Reduced soil erosion and improved water retention',
            'Enhanced water runoffs',
            'Increased soil erosion',
            'Decreased agricultural productivity'
          ],
          correctAnswer: 'Reduced soil erosion and improved water retention',
        },
        {
          question: 'What practice involves rotating different crops on the same land to improve soil health?',
          options: [
            'Monoculture',
            'Overfishing',
            'Intensive farming',
            'Crop rotation'
          ],
          correctAnswer: 'Crop rotation',
        },
        {
          question: 'Which of the following is NOT a common method of soil conservation?',
          options: [
            'Contour plowing',
            'Agroforestry',
            'Deforestation',
            'Erosion control blankets'
          ],
          correctAnswer: 'Agroforestry',
        },
      
    ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [progressvalue, setProgressvalue] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setProgressvalue(progressvalue + 10);
  };

  return (
    <div className="container text-center py-5">
      <h2>Track your Progress</h2>
      <ProgressBar className='progress mb-3' completed={progressvalue} maxCompleted={90} />
      <h1>Beginner Level</h1>
      <div className="quiz-container card p-4 shadow-lg mx-auto w-75">
        {currentQuestion < quizData.length ? (
          <>
            <h2>{quizData[currentQuestion].question}</h2>
            <div className="row mt-3">
              {quizData[currentQuestion].options.map((option, index) => (
                <div key={index} className="col-md-6 mb-2">
                  <button className="btn btn-primary w-100" onClick={() => handleAnswerClick(option)}>
                    {option}
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="quiz-result">
            <p>Your score: {score}/{quizData.length}</p>
            <button className="btn btn-info" onClick={() => setShowAnswers(true)}>Show Correct Answers</button>
            {showAnswers && (
              <div className="correct-answers mt-3">
                <h3>Correct Answers:</h3>
                <ul className="list-group">
                  {quizData.map((question, index) => (
                    <li key={index} className="list-group-item">
                      {question.question}: <strong>{question.correctAnswer}</strong>
                    </li>
                  ))}
                </ul>
                <button className="btn btn-success mt-3">
                  <Link to='/level2' className="text-white text-decoration-none">Intermediate</Link>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Level1;
