import React, { useState, useEffect } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['F', 'a', 'r', 'd', 'e', 'e', 'n'];
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
      console.log('1..........')
    }, 4000)
    // return () => {
    //   clearTimeout(timeoutId)
    //   }
  }, [])

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1> 
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, </span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            &nbsp;
              {/* <img src={ LogoTitle } alt='Developer' /> */}
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
          </h1>
          <h2>Full Stack Developer / React(JS) / Spring Boot(Java)</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        {/* <Logo /> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
