import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './Contact'
import reportWebVitals from './reportWebVitals';
import BasicsCourse from './Basics Course';
import { Ingredient, Recipe, RecipeCard, Material } from './Recipe'
import { MealPlanner, Meal, ExpandingList, WeekRecipes } from './Meal Planner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import recipeJSONGrilledCheese from './recipes/grilled cheese.json';
import recipeJSONGHamburger from './recipes/hamburger.json';
import recipeJSONBreadedChicken from './recipes/breaded chicken.json';


let r1 = Recipe.parseJSON(recipeJSONGrilledCheese)
let r2 = Recipe.parseJSON(recipeJSONGHamburger)
let r3 = Recipe.parseJSON(recipeJSONBreadedChicken)
// console.log(r1)
// let recipeAry = [r1, r2]
// console.log(recipeAry) 
//end meal planning
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
  <App/>
</BrowserRouter>
);
/*INTRODUCTION SECTION
  <React.StrictMode>
  <BasicsCourse></BasicsCourse>
</React.StrictMode>
*/
/* MEAL PLANNER
<React.StrictMode>
<WeekRecipes recipes={recipeAry}></WeekRecipes> 
 </React.StrictMode>
 */
/*REIPCE 1
<React.StrictMode>
   <RecipeCard  imagePath={'recipes/test recipe/chicken.jpg'} recipe={recipe} />
  </React.StrictMode>
  */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
