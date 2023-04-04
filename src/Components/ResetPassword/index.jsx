import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../Firebase/Firebase';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState({ success: '', error: null });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage({
          error: null,
          success: 'consultez votre email pour changer le mot de passe',
        });
        setTimeout(() => {
          navigate('/login');
        }, 5000);
      })
      .catch((error) => {
        setMessage({
          success: '',
          error: error,
        });
      });
  };
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftForget"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {message.success.length > 0 && (
              <span
                style={{
                  border: '1px solid green',
                  background: 'green',
                  color: '#ffffff',
                }}
              >
                {message.success}
              </span>
            )}
            {message.error && <span>{message.error.message}</span>}
            <h2>Mot de passe oublié?</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="off"
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <button disabled={email === ''}>Recuperer</button>
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/login">
                Nouveau sur marvel-quiz? inscrivez-vous maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
