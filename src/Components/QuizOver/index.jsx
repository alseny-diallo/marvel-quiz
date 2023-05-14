import React, { forwardRef, useEffect, useState } from 'react';
const QuizOver = forwardRef((props, ref) => {
  const [asked, setAsked] = useState([]);
  const { levels, score, maxQuestions, quizLevel, percent, loadNextLevel } =
    props;

  useEffect(() => {
    setAsked(ref.current);
    return () => {};
  }, [ref, asked]);

  const averageGrade = maxQuestions / 2;

  const recap =
    score >= averageGrade ? (
      <>
        <div className='stepsBtnContainer'>
          {quizLevel < levels.length - 1 ? (
            <>
              <p className='successMsg'>Bravo, passez au niveau suivant !</p>
              <button
                className='btnResult success'
                onClick={() => loadNextLevel(quizLevel)}
              >
                Niveau Suivant
              </button>
            </>
          ) : (
            <>
              <p className='successMsg'>Bravo, vous êtes un expert !</p>
              <button
                className='btnResult gameOver'
                onClick={() => loadNextLevel(0)}
              >
                Recommener
              </button>
            </>
          )}
        </div>
      </>
    ) : (
      <>
        <div className='stepsBtnContainer'>
          <p className='failureMsg'>Vous avez échoué !</p>
        </div>
      </>
    );

  const questionsRecap =
    score >= averageGrade ? (
      asked.map(({ id, question, answer }) => (
        <tr key={id}>
          <td>{question}</td>
          <td>{answer}</td>
          <td>
            <button className='btnInfo'>Infos</button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan='3'>
          <p style={{ textAlign: 'center', color: 'red' }}>Pas de reponses!</p>
        </td>
      </tr>
    );
  return (
    <>
      {recap}
      <div className='percentage'>
        <div className='progressPercent'>Reussite: {percent}%</div>
        <div className='progressPercent'>
          Note: {score}/{maxQuestions}
        </div>
      </div>
      <hr />
      <p>Les reponses aux questions:</p>
      <div className='answerContainer'>
        <table className='answers'>
          <thead>
            <tr>
              <th>Question</th>
              <th>Reponses</th>
              <th>Infos</th>
            </tr>
          </thead>
          <tbody>{questionsRecap}</tbody>
        </table>
      </div>
    </>
  );
});

export default React.memo(QuizOver);
