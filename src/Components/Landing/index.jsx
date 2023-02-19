import { useEffect, useRef, useState } from 'react';

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
        <button className="btn-welcome">Inscription</button>
      </div>
      <div
        className="rightBox"
        onMouseOver={() => setImg('rightImg')}
        onMouseOut={() => clearImg('rightImg')}
      >
        <button className="btn-welcome">Connexion</button>
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
