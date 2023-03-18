import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const refWolverine = useRef(null);
  const [btn, setBtn] = useState(false);
  useEffect(() => {
    refWolverine.current.classList.add('startingImg');

    setTimeout(() => {
      refWolverine.current.classList.remove('startingImg');
      setBtn(true);
    }, 1000);
    return () => {};
  }, []);

  const setImg = (myClass) => {
    refWolverine.current.classList.add(myClass);
  };

  const clearImg = (myClass) => {
    if (refWolverine.current.classList.contains(myClass)) {
      refWolverine.current.classList.remove(myClass);
    }
  };

  const displayBtn = btn && (
    <>
      <div
        className="leftBox"
        onMouseOver={() => setImg('leftImg')}
        onMouseOut={() => clearImg('leftImg')}
      >
        <Link className="btn-welcome" to="/signup">
          Inscription
        </Link>
      </div>
      <div
        className="rightBox"
        onMouseOver={() => setImg('rightImg')}
        onMouseOut={() => clearImg('rightImg')}
      >
        <Link className="btn-welcome" to="/login">
          Connexion
        </Link>
      </div>
    </>
  );
  return (
    <main ref={refWolverine} className="welcomePage">
      {displayBtn}
    </main>
  );
};

export default Landing;
