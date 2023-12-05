import React from 'react';
import logo from './logo.svg';
import './App.css';

function Contact(): React.ReactElement {
  return (
    <div className="App">
      <header className="Contact-header">
        <p>
          Welcome to the Contact Me Page!
        </p>

      </header>
      <header className="Contact-body">
        <p>
          I hope you have been enjoying learning to cook with me!
          This webtool was created as part of the Education Technology project at Georgia Tech.
        </p>
        <p>
          The goal of this tool is to teach people about basic cooking techniques and nutritional information.
          Recipes with step by step written instruction and videos are also provided. 
          If you have any recommendations, requests, or comments,
          please reach out to me at the following email address: cookingwithajvale@gmail.com
        </p>

      </header>
    </div>
  );
}

export default Contact;
