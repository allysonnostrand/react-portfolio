import Navbar from './components/Navbar';
import Project from './components/Project';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

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
          <br /><br />test</p>
        </div>
        </div>
        <div id='projects'>
        {objects.map(obj=> {
        return (<Project key={obj.title} title={obj.title} deployed={obj.deployed} repo={obj.repo} image={obj.image} />)
        })}
        </div>
        <div className='contactbox' id='contact'>
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
        <footer>
          <a className='footernav' href='https://github.com/allysonnostrand' target="_blank" rel='noreferrer noopener'>Github
          </a>
          <a className='footernav'href='https://linkedin.com/in/allyson-nostrand-912910154' target="_blank" rel='noreferrer noopener'>LinkedIn
          </a>
        </footer>
      </div>
    </Router>   
  );
}

export default App;
