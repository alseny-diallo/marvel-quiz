import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/Firebase';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const initialValues = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [loginData, setLoginData] = useState(initialValues);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = loginData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setLoginData({ ...initialValues });
        navigate('/login');
      })
      .catch((error) => {
        setError(error);
      });
  };
  const { pseudo, email, password, confirmPassword } = loginData;
  const btn =
    pseudo === '' ||
    email === '' ||
    password === '' ||
    password !== confirmPassword ? (
      <button disabled>Inscription</button>
    ) : (
      <button>Inscription</button>
    );
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {error && <span>{error.message}</span>}
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  value={pseudo}
                  id="pseudo"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="pseudo">Pseudo</label>
              </div>

              <div className="inputBox">
                <input
                  type="email"
                  value={email}
                  id="email"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  value={password}
                  id="password"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>
              <div className="inputBox">
                <input
                  type="confirmPassword"
                  value={confirmPassword}
                  id="confirmPassword"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe
                </label>
              </div>
              {btn}
            </form>
            <div className="" linkContainer>
              <Link className="simpleLink" to="/login">
                Deja inscrit? connectez-vous!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
