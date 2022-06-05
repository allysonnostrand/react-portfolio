import React from 'react'
import Project from '../Project'

export default function Portfolio (props) {
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
    objects.map(obj=> {
      return (<Project title={obj.title} deployed={obj.deployed} repo={obj.repo} image={obj.image} />)
     })
  )}
