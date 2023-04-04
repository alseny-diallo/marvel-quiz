import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (checked) {
      signOut(auth)
        .then(() => {
          setTimeout(() => {
            navigate('/');
          }, 1000);
        })
        .catch(Error);
    }
    return () => {
      setChecked(false);
    };
  }, [checked]);
  return (
    <div className="logoutContainer">
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Logout;
