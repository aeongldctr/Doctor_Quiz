import React from 'react';
import Option from './Option';

function Question({ questionData, currentNumber, selectedOption, onSelectOption }) 
{
  return (
    <div className="question-box">
      <span className="q-label">QUESTION NO.{currentNumber}</span>
      <h2 className="q-text">{questionData.question}</h2>
      <Option
        options={questionData.options}
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
      />
    </div>
  );
}

export default Question;