import React from 'react';
import './App.css';

function About(): React.ReactElement {
  return (
    <div className="App">
      <header className="Contact-header">
        <p>
          Welcome to the Beginner's Guide to Home Cooking!
        </p>

      </header>
      <header className="Contact-body">
        <p>
          This webtool was created as part of the Education Technology project at Georgia Tech.
        </p>
        <p>
          Feel free to click around an explore! <br/>
          Included in this tool is a basics course, a meal planning tool, and some recipes you can try out for yourself.
        </p>

        <p>
          The goal of this tool is to teach people about basic cooking techniques, nutritional information, and easy to understand recipes.
          Recipes with step by step written instruction and videos are provided.
          <br/>
          If you have any recommendations, requests, or comments,
          please reach out to me at the following email address: cookingwithajvale@gmail.com
        </p>
      <p>
        To gauge your cooking confidence and skill level, please take the following survey: <a href="http://peersurvey.cc.gatech.edu/gt/ff63804d129049aa8f1b0f4d82f8ea99"> Survey Link</a>
      </p>
      </header>
    </div>
  );
}

export default About;
