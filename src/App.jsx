import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Signup from './Components/Signup';
import ResetPassword from './Components/ResetPassword';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Welcome from './Components/Welcome';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
