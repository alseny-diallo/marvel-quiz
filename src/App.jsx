import { Routes, Route, Router } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
