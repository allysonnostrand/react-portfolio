import React from 'react'
import Project from '../Project'

export default function Portfolio (props) {
  const objects = [
    {
      title:'Tech Blog',
      deployed:'https://radiant-sea-69488.herokuapp.com/',
      repo:'https://github.com/allysonnostrand/tech-blog',
      image:'fdsfsd',
    },
    {
      title:'Stardew Forum',
      deployed:'https://stardew-forum-project.herokuapp.com/',
      repo:'https://github.com/allysonnostrand/stardew_forum',
      image:'fdsfdsasdfsd',
    },
    {
      title:'Quote Generator',
      deployed:'https://derrikhan.github.io/quoteGenerator/',
      repo:'https://github.com/allysonnostrand/quoteGenerator',
      image:'fdsfdsasdfsd',
    },
    {
      title:'Stardew Forum',
      deployed:'https://stardew-forum-project.herokuapp.com/',
      repo:'https://github.com/allysonnostrand/stardew_forum',
      image:'fdsfdsasdfsd',
    },
    {
      title:'Stardew Forum',
      deployed:'https://stardew-forum-project.herokuapp.com/',
      repo:'https://github.com/allysonnostrand/stardew_forum',
      image:'fdsfdsasdfsd',
    },
    {
      title:'Stardew Forum',
      deployed:'https://stardew-forum-project.herokuapp.com/',
      repo:'https://github.com/allysonnostrand/stardew_forum',
      image:'fdsfdsasdfsd',
    }
  ]
  return (
    objects.map(obj=> {
      return (<Project title={obj.title} deployed={obj.deployed} repo={obj.repo} image={obj.image} />)
     })
  )}
