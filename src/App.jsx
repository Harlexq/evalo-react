import './assets/scss/App.scss';
import './assets/scss/Responsive.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
