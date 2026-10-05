import React from 'react';

function Option({ options, selectedOption, onSelectOption }) {
  return (
    <div className="horizontal-options">
      {options.map((option, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        return (
          <label key={index} className="radio-label">
            <input
              type="radio"
              name="quiz-option"
              checked={selectedOption === option}
              onChange={() => onSelectOption(option)}
            />
            <span>{letter}. {option}</span>
          </label>
        );
      })}
    </div>
  );
}

export default Option;