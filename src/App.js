import Navbar from './components/Navbar';
import Project from './components/Project';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import { FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import { IconContext } from 'react-icons';

function App(props) {
  const objects = [
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
      image:'./images/quoteGen-sc-1.png',
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
    }
  ]

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="containers" id="aboutMe">
        <img className= "bioImg" src={process.env.PUBLIC_URL+"/images/Portfolio-image-1.png"} alt='ally sitting in a chair'></img>
        <div className='abouttext'>
          <h2>About Me</h2>
          <p>Recent graduate of the University of Washington Coding Bootcamp looking to start a professional career in Web Development.
           Spent the past several years working in the customer service industry- building on soft skills inlcuding communication, accountability and adaptability.
          </p>
        </div>
        </div>
        <div id='projects' className='projects'>
          {objects.map(obj=> {
          return (<Project key={obj.title} title={obj.title} deployed={obj.deployed} repo={obj.repo} image={obj.image} />)
          })}
        </div>
        <ContactForm />
        <footer>
          <IconContext.Provider value={{color: "white"}}>
            <a className='footernav' href='https://github.com/allysonnostrand' target="_blank" rel='noreferrer noopener'><FaGithubSquare className='footer-icon' />
            </a>
            <a className='footernav'href='https://linkedin.com/in/allyson-nostrand-912910154' target="_blank" rel='noreferrer noopener'><FaLinkedin className='footer-icon' />
            </a>
          </IconContext.Provider>
        </footer>
      </div>
    </Router>   
  );
}

export default App;
