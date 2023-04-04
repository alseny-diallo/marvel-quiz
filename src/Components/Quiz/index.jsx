import { useState, useEffect } from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
import { QuizMarvel } from '../QuizMarvel';

const Quiz = ({ user }) => {
  const [levels, setLevels] = useState(['debutant', 'confirme', 'expert']);
  const [quizLevel, setQuizLevel] = useState(0);
  const loadQuestions = (level) => {};
  useEffect(() => {
    loadQuestions(levels[quizLevel]);
    return () => {};
  }, [quizLevel]);
  return (
    <div>
      <Levels />
      <ProgressBar />
      <h2>Notre question Quiz</h2>
      <p className="answerOptions">Question 1</p>
      <p className="answerOptions">Question 2</p>
      <p className="answerOptions">Question 3</p>
      <p className="answerOptions">Question 4</p>
      <button className="btnSubmit">Suivant</button>
    </div>
  );
};

export default Quiz;
