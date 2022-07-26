import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume'
import Project from './components/Project';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
  const objects = [
    {
      title:'Tech Blog',
      deployed:'https://radiant-sea-69488.herokuapp.com/',
      repo:'https://github.com/allysonnostrand/tech-blog',
      image:'./images/tech-blog-sc-1.png',
    },
    {
      title:'Stardew Forum',
      deployed:'https://stardew-forum-project.herokuapp.com/',
      repo:'https://github.com/allysonnostrand/stardew_forum',
      image:'./images/stardew-forum-sc-1.png'
    },
    {
      title:'Quote Generator',
      deployed:'https://derrikhan.github.io/quoteGenerator/',
      repo:'https://github.com/allysonnostrand/quoteGenerator',
      image:'./images/quotegen-sc-1.png',
    },
    {
      title:'Weather Dash',
      deployed:'https://allysonnostrand.github.io/weather-dash/',
      repo:'https://github.com/allysonnostrand/weather-dash',
      image:'./images/weather-dash-sc-1.png',
    },
    {
      title:'Password Gen',
      deployed:'https://allysonnostrand.github.io/password-gen/',
      repo:'https://github.com/allysonnostrand/password-gen',
      image:'./images/password-gen-sc-1.png',
    },
    {
      title:'Create Notes',
      deployed:'https://enigmatic-ridge-02123.herokuapp.com/',
      repo:'https://github.com/allysonnostrand/create-notes',
      image:'./images/create-notes-sc-1.png',
    }
  ]

  return (
    <Router>
      <div className="App">
       <Navbar />
          {/* <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/resume" element={<Resume/>} />
          </Routes> */}

    <container className="containers">
      <img className= "bioImg" src={process.env.PUBLIC_URL+"/images/Portfolio-image-1.png"} alt='ally sitting in a chair'></img>
      <div className='abouttext'>
        <h2>About Me</h2>
        <p>Recent graduate of the University of Washington Coding Bootcamp looking to start a professional career in Web Development.
           Spent the past several years working in the customer service industry- building on soft skills inlcuding communication, accountability and adaptability.
           <br /><br />test</p>
      </div>
    </container>

    {objects.map(obj=> {
      return (<Project title={obj.title} deployed={obj.deployed} repo={obj.repo} image={obj.image} />)
     })}

    <div className='contactbox'>
      <div className='boxitems'>
        <h3 className='contacthead'>Please feel free to reach out!</h3>
        <p>Email: allyson.nostrandd@gmail.com</p>
        <div className='extra'>
          <h3 className='extrahead'>You can also find me on</h3>
          Github: <a className='contactlinks' href='https://github.com/allysonnostrand' target="_blank" rel='noreferrer noopener'>https://github.com/allysonnostrand
          </a>
          <br></br>
          LinkedIn: <a className='contactlinks' href='https://linkedin.com/in/allyson-nostrand-912910154' target="_blank" rel='noreferrer noopener'>https://linkedin.com/in/allyson-nostrand-912910154
          </a>
        </div>
        <h4>Thank you for visiting!</h4>
      </div>
    </div>
        {/* <Footer /> */}
      </div>
    </Router>  
  );
}

export default App;
