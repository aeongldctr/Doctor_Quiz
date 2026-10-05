import React from 'react';

function HomePage({ onStartQuiz }) {
  return (
    <div className="home-screen">
      <div className="home-content">
        <h1 className="main-title">
          <span>Pop Culture &</span>
          <span>Science QUIZ!!</span>
        </h1>
        <p className="author-tag">BY: ANGELO DOCTOR</p>
      </div>

      <div className="bottom-right-action">
        <button className="green-pill-btn" onClick={onStartQuiz}>
          <span>START QUIZ</span>
          <span className="gold-arrow">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;