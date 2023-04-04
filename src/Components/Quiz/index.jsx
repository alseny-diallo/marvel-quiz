import { useState, useEffect } from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
import { QuizMarvel } from '../QuizMarvel';

const Quiz = ({ user }) => {
  const [levels, setLevels] = useState(['debutant', 'confirme', 'expert']);
  const [quizLevel, setQuizLevel] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(10);
  const [storedQuestions, setStoredQuestions] = useState([]);
  const loadQuestions = (level) => {
    const fetchArrayQuizz = QuizMarvel[0].quizz[level];
    if (fetchArrayQuizz.length >= maxQuestions) {
      const newArray = fetchArrayQuizz.map(({ answer, ...rest }) => rest);
      setStoredQuestions(newArray);
    } else {
      console.log('pas assez de question');
    }
  };
  useEffect(() => {
    loadQuestions(levels[quizLevel]);
    return () => {};
  }, [quizLevel, storedQuestions]);
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
