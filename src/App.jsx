import './assets/scss/App.scss';
import './assets/scss/Responsive.scss';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import ReadMore from './components/ReadMore';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <RouteBasedBreadcrumb />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
        </Routes>
        <RouteBasedReadMore />
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


function RouteBasedReadMore() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null;
  }

  return <ReadMore />;
}
