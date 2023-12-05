import React from 'react';
import logo from './logo.svg';
import './App.css';

function About(): React.ReactElement {
  return (
    <div className="App">
      <header className="Contact-header">
        <p>
          Welcome to my cooking application!
        </p>

      </header>
      <header className="Contact-body">
        <p>
          Feel free to click around an explore! 
          There's a basics course that details introductory cooking methods and techniques, a meal planning tool, and some recipes you can try out for yourself. 
        </p>
       
      </header>
    </div>
  );
}

export default About;
