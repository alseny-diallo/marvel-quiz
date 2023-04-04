import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase/Firebase';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(initialValues);
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((user) => {
        setLoginData({ ...initialValues });
        navigate('/welcome');
      })
      .catch((error) => {
        setError(error);
      });
  };
  const btn = (
    <button disabled={loginData.email === '' || loginData.password.length < 5}>
      Connexion
    </button>
  );
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {error && <span>{error.message}</span>}
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  value={loginData.email}
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  id="password"
                  value={loginData.password}
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Mot de passe</label>
              </div>
              {btn}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/signup">
                Nouveau sur marvel-quiz? inscrivez-vous maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
