import React, { useEffect, useState } from 'react';
import Logout from '../Logout';
import Quiz from '../Quiz';
import { onAuthStateChanged } from 'firebase/auth';
import auth, { user } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { getDoc } from 'firebase/firestore';

const Welcome = () => {
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      user ? setUserSession(user) : navigate('/');
    });
    if (!!userSession) {
      const refUser = user(userSession.uid);
      getDoc(refUser)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const docData = snapshot.data(); //object
            setUserData(docData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return listener();
  }, [userSession]);
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
            <Quiz user={userData} />
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
