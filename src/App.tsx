import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import BasicsCourse from './Basics Course';
import Navbar from './Navbar';
import { MealPlanner, WeekRecipes } from './Meal Planner';
import About from './About';
import { RecipeCard, Recipe } from './Recipe';

import recipeJSONGrilledCheese from './recipes/grilled cheese.json';
import recipeJSONGHamburger from './recipes/hamburger.json';
import recipeJSONBreadedChicken from './recipes/breaded chicken.json';

import chickenImg from './recipes/test recipe/breaded chicken.jpg'
import grilledCheeseImg from './recipes/test recipe/grilled cheese.jpg'
import hamburgerImg from './recipes/test recipe/hamburger.jpg'

let r1 = Recipe.parseJSON(recipeJSONGrilledCheese)
let r2 = Recipe.parseJSON(recipeJSONGHamburger)
let r3 = Recipe.parseJSON(recipeJSONBreadedChicken)
let recipeAry = [r1, r2, r3]
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/basicsCourse' element={<BasicsCourse />} />
        <Route path='/mealPlanner' element={<WeekRecipes recipes={recipeAry}></WeekRecipes> } />
        <Route path='/recipe/breaded_chicken' element={<RecipeCard  imagePath={chickenImg} recipe={r3} />} />
        <Route path='/recipe/grilled_cheese' element={<RecipeCard  imagePath={grilledCheeseImg} recipe={r1} />} />
        <Route path='/recipe/hamburger' element={<RecipeCard  imagePath={hamburgerImg} recipe={r2} />} />
        <Route path ='/' element={<About/>}/>
      </Routes>
    </>
  );
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn eep
        </a>
      </header>
    </div>
  );*/
}

export default App;
