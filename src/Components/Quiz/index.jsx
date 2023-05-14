import { useState, useEffect, useRef, Fragment } from 'react';
import Levels from '../Levels';
import ProgressBar from '../ProgressBar';
import { QuizMarvel } from '../QuizMarvel';
import QuizOver from '../QuizOver';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ user }) => {
  const levels = ['debutant', 'confirme', 'expert'];
  const [quizLevel, setQuizLevel] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(10);
  const [storedQuestions, setStoredQuestions] = useState([]);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [idQuestion, setIdQuestion] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizend] = useState(false);
  const [percent, setPercent] = useState(0);
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
  }, [quizLevel, maxQuestions]);

  useEffect(() => {
    if (user?.pseudo) {
      toast.info(`Bienvenue ${user.pseudo} et bonne chance `, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
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

  const gameOver = () => {
    const gradePercent = getPercentage(maxQuestions, score);
    if (gradePercent >= 50) {
      setQuizLevel(quizLevel + 1);
    }
    setPercent(gradePercent);
    setQuizend(true);
  };

  const loadNextQuestion = () => {
    if (idQuestion === maxQuestions - 1) {
      gameOver();
      return null;
    }
    const goodAnswer = storedDataRef.current[idQuestion].answer;
    setIdQuestion(idQuestion + 1);
    if (userAnswer === goodAnswer) {
      setScore(score + 1);
      toast.success('Bravo +1');
    } else {
      toast.error('Oups mauvaise reponse!');
    }
  };
  const getPercentage = (maxQuestions, score) => (score / maxQuestions) * 100;

  return (
    <Fragment>
      {!quizEnd ? (
        <>
          <ToastContainer />
          <Levels />
          <ProgressBar idQuestion={idQuestion} maxQuestions={maxQuestions} />
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
            {idQuestion < maxQuestions - 1 ? 'Suivant' : 'Terminer'}
          </button>
        </>
      ) : (
        <QuizOver
          ref={storedDataRef}
          levels={levels}
          socre={score}
          maxQuestions={maxQuestions}
          quizLevel={quizLevel}
          percent={percent}
        />
      )}
    </Fragment>
  );
};

export default Quiz;
