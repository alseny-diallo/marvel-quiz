import { useState } from 'react';

const Signup = () => {
  const initialValues = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const [loginData, setLoginData] = useState(initialValues);
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.id]: event.target.value,
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
            <h2>Inscription</h2>
            <form>
              <div className="inputBox">
                <input
                  type="text"
                  value={pseudo}
                  id="pseudo"
                  autoComplete="off"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="pseudo"></label>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
