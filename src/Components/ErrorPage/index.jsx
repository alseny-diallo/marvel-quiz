import batman from '../../assets/images/batman.png';
const ErrorPage = () => {
  return (
    <div className="quiz-bg">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
          Oups, cette page n'existe pas!
        </h2>
        <img
          style={{ display: 'block', margin: '40px auto' }}
          src={batman}
          alt="batman"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
