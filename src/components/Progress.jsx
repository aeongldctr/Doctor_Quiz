import React from 'react';

function Progress({ totalQuestions, userHistory }) {
  return (
    <div className="progress-header">
      <span className="progress-title">PROGRESS</span>
      <div className="progress-slots">
        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const historyItem = userHistory[idx];
          let mark = "";
          if (historyItem) {
            mark = historyItem.isCorrect ? "✓" : "X";
          }

          return (
            <div key={idx} className="track-slot">
              <span className={`mark ${historyItem?.isCorrect ? 'correct' : 'wrong'}`}>
                {mark}
              </span>
              <div className="underline"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Progress;