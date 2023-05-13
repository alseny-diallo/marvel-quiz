import React from 'react';

const ProgressBar = ({ idQuestion, maxQuestions }) => {
  const currenctQuestion = idQuestion + 1;
  const getProgressValue = (totalQuestion, currenctQuestion) => {
    return (currenctQuestion * 100) / totalQuestion;
  };
  const progressValue = getProgressValue(maxQuestions, currenctQuestion);
  return (
    <>
      <div className='percentage'>
        <div className='progressPercent'>
          {`Question: ${currenctQuestion}/${maxQuestions}`}
        </div>
        <div className='progressPercent'>{`Progression: ${progressValue}%`}</div>
      </div>
      <div className='progressBar'>
        <div
          className='progressBarChange'
          style={{ width: `${progressValue}%` }}
        ></div>
      </div>
    </>
  );
};

export default React.memo(ProgressBar);
