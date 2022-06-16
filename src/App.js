import Footer from './components/Footer';
// import Project from './components/Project';
import Navbar from './components/Navbar';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
       <Navbar />
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/resume" element={<Resume/>} />
          </Routes>
        <Footer />
      </div>
    </Router>  
  );
}

export default App;
