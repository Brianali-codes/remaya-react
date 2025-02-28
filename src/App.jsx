import './App.css';
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './pages';
import Location from './location';
import Projects from './projects';
import Mission from './mission';
import Quote from './quote';
import Contacts from './contacts';
import Donate from './pages/donate'; // Import the Donate page
import Support from './pages/support'; // Import the Support page
import DonateForm from './pages/donateform';
import CarouselGallery from './gallery';
import Menu2 from './menu2';
import Scroller from './scroller';
import LearnMore from './pages/learnMore';
import Blog from './blog';
import ScrollToTop from './scrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Route for Donate page */}
        <Route path="/donate" element={<Donate />} />
        {/* Route for Support page */}
        <Route path="/support" element={<Support />} />
        <Route path="/donateform" element={<DonateForm/>} />
        <Route path="/learnMore" element={<LearnMore/>}/>
        {/* Other components remain as is */}
        <Route path="/" element={<>
          <Navbar />
          <Page />
          <Location />
          <Projects />
          <CarouselGallery/>
          <Quote />
          <Scroller/>
          <Mission />
          <Blog/>
          <Menu2/>
          <Contacts />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
