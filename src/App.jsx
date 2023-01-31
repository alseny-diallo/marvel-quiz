import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Home from './Components/Home';
import Signup from './Components/Signup';
import ResetPassword from './Components/ResetPassword';
import ErrorPage from './Components/ErrorPage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      heeeeeeee
      {/* <Header /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
