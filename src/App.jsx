import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuestionPage from './components/QuestionPage';
import ScorePage from './components/ScorePage';
import { questions } from './data/questions';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [finalScore, setFinalScore] = useState(0);

  const handleStartQuiz = () => {
    setCurrentPage('quiz');
  };

  const handleFinishQuiz = (score) => {
    setFinalScore(score);
    setCurrentPage('score');
  };

  const handleRetake = () => {
    setFinalScore(0);
    setCurrentPage('home');
  };

  return (
    <div className="app-container">
      {currentPage === 'home' && (
        <HomePage onStartQuiz={handleStartQuiz} />
      )}

      {currentPage === 'quiz' && (
        <QuestionPage questions={questions} onFinishQuiz={handleFinishQuiz} />
      )}

      {currentPage === 'score' && (
        <ScorePage
          score={finalScore}
          totalQuestions={questions.length}
          onRetake={handleRetake}
        />
      )}
    </div>
  );
}

export default App;