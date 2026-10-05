import React, { useState } from 'react';
import Question from './Question';
import Progress from './Progress';

function QuestionPage({ questions, onFinishQuiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userHistory, setUserHistory] = useState([]);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleNext = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQuestion.answer;
    const newHistory = [
      ...userHistory,
      { questionId: currentQuestion.id, selectedOption, isCorrect }
    ];

    setUserHistory(newHistory);
    setSelectedOption(null);

    if (isLastQuestion) {
      const finalScore = newHistory.filter(item => item.isCorrect).length;
      onFinishQuiz(finalScore);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="quiz-screen">
      <Progress
        totalQuestions={questions.length}
        userHistory={userHistory}
      />
      
      <Question
        questionData={currentQuestion}
        currentNumber={currentIndex + 1}
        selectedOption={selectedOption}
        onSelectOption={setSelectedOption}
      />

      <div className="bottom-right-action">
        <button
          className="green-pill-btn"
          onClick={handleNext}
          disabled={!selectedOption}
        >
          <span>{isLastQuestion ? 'FINISH' : 'NEXT'}</span>
          <span className="gold-arrow">&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;