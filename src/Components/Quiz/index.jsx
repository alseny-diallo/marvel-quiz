import { useState, useEffect, useRef } from 'react';
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
  const [score, setScore] = useState(0);
  const storedDataRef = useRef(null);

  useEffect(() => {
    const loadQuestions = (level) => {
      const fetchArrayQuizz = QuizMarvel[0].quizz[level];
      if (fetchArrayQuizz.length >= maxQuestions) {
        storedDataRef.current = fetchArrayQuizz;
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
    toast.info(`Welcome`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  }, []);

  useEffect(() => {
    if (storedQuestions.length > 0) {
      setQuestion(storedQuestions[idQuestion].question);
      setOptions(storedQuestions[idQuestion].options);
      setUserAnswer(null);
      setIsDisabled(true);
    }

    return () => {};
  }, [storedQuestions, idQuestion]);

  const submitAnswer = (selectedAnswer) => {
    setUserAnswer(selectedAnswer);
    setIsDisabled(false);
  };

  const loadNextQuestion = () => {
    if (idQuestion === maxQuestions - 1) {
      return null;
    }
    const goodAnswer = storedDataRef.current[idQuestion].answer;
    setIdQuestion(idQuestion + 1);
    if (userAnswer === goodAnswer) {
      setScore(score + 1);
    }
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
      <button
        className='btnSubmit'
        onClick={loadNextQuestion}
        disabled={isDisabled}
      >
        Suivant
      </button>
    </div>
  );
};

export default Quiz;
