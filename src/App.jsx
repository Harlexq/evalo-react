import './assets/scss/App.scss';
import './assets/scss/Responsive.scss';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RouteBasedBreadcrumb />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

function RouteBasedBreadcrumb() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null;
  }

  return <Breadcrumb />;
}
