import React from 'react';

function ScorePage({ score, totalQuestions, onRetake }) {
  const mistakes = totalQuestions - score;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="score-screen">
      <h1 className="quiz-completed-header">QUIZ COMPLETED</h1>

      <div className="result-card">
        <div className="stat-row">
          <span className="stat-label">TOTAL QUESTIONS :</span>
          <span className="stat-val">{totalQuestions}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">CORRECT ANSWER :</span>
          <span className="stat-val">{score}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">MISTAKES :</span>
          <span className="stat-val">{mistakes}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">PERCENTAGE :</span>
          <span className="stat-val">{percentage}%</span>
        </div>

        <div className="your-score-section">
          <h2>Your Score:</h2>
          <div className="fraction-display">
            <span className="numerator">{score}</span>
            <span className="slash">/</span>
            <span className="denominator">{totalQuestions}</span>
          </div>
        </div>
      </div>

      <div className="bottom-right-action">
        <button className="green-pill-btn" onClick={onRetake}>
          <span>RETAKE</span>
          <span className="gold-arrow">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default ScorePage;