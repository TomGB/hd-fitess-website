import React from 'react';

const About = () => (
  <div className='contain'>
    <div className='profile-picture-container'><img src={require('../assets/profile.jpg')} alt='hayley duffy profile' /></div>
    <div className='about-info'>
      <h1>Meet Hayley Duffy</h1>
      <div className='seperator'></div>
      <p>
        Hayley once said to me: "There are only so many times you can run the same route".
        This is when I knew she needed a change in her life.
        So after teaching groups and individuals at the gym Hayley has decided to take her personal training carrer on the road.
      </p>
      <p>
        She has now build this platform to share her experience of fitness, cooking and mental wellbeing with the world.
        Hayley is motivated by not just helping others but by empowering them to achieve their goals and to build lasting change.
      </p>
      <p>
        Nothing would make her happier than helping you cross your finish line.
      </p>
    </div>
  </div>
)

export default About
