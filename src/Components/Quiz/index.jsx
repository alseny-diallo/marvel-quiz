import { useState, useEffect } from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
import { QuizMarvel } from '../QuizMarvel';

const Quiz = ({ user }) => {
  const [levels, setLevels] = useState(['debutant', 'confirme', 'expert']);
  const [quizLevel, setQuizLevel] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(10);
  const [storedQuestions, setStoredQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [idQuestion, setIdQuestion] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [userAnswer, setUserAnswer] = useState(null);

  useEffect(() => {
    const loadQuestions = (level) => {
      const fetchArrayQuizz = QuizMarvel[0].quizz[level];
      if (fetchArrayQuizz.length >= maxQuestions) {
        const newArray = fetchArrayQuizz.map(({ answer, ...rest }) => rest);
        setStoredQuestions(newArray);
      } else {
        console.log('pas assez de question');
      }
    };
    loadQuestions(levels[quizLevel]);
    return () => {};
  }, [quizLevel, maxQuestions, levels]);

  useEffect(() => {
    if (storedQuestions.length > 0) {
      setQuestion(storedQuestions[idQuestion].question);
      setOptions(storedQuestions[idQuestion].options);
    }
    return () => {};
  }, [storedQuestions, idQuestion]);

  const submitAnswer = (selectedAnswer) => {
    setUserAnswer(selectedAnswer);
    setIsDisabled(false);
  };

  return (
    <div>
      <Levels />
      <ProgressBar />
      <h2>{question}</h2>
      {options.map((option, index) => (
        <p
          key={index}
          className={`answerOptions ${
            userAnswer === option ? 'selected' : null
          }`}
          onClick={() => submitAnswer(option)}
        >
          {option}
        </p>
      ))}
      <button className="btnSubmit" disabled={isDisabled}>
        Suivant
      </button>
    </div>
  );
};

export default Quiz;
