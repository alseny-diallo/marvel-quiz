import React, { useEffect, useState } from 'react';
import Logout from '../Logout';
import Quiz from '../Quiz';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const [userSession, setUserSession] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      user ? setUserSession(user) : navigate('/');
    });
    return listener();
  }, []);
  return (
    <>
      {!userSession ? (
        <>
          <div className="loader"></div>
          <p>Loading...</p>
        </>
      ) : (
        <div className="quiz-bg">
          <div className="container">
            <Logout />
            <Quiz />
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
