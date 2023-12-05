import React, { ChangeEvent, Fragment, ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { Ingredient, Recipe, RecipeCard, Material } from './Recipe'
import recipeJSONBreaded from './recipes/breaded chicken.json';
import recipeJSONGrilledCheese from './recipes/grilled cheese.json';
import { useState } from 'react';

/*
export class DayBox {
  dayName: string;
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  prep: Meal[];

  constructor(dayName: string, breakfast: Meal[], lunch: Meal[], dinner: Meal[], prep: Meal[]) {
    this.dayName = dayName;
    this.breakfast = breakfast;
    this.lunch = lunch;
    this.dinner = dinner;
    this.prep = prep;
  }
}
*/
export class Meal {
  title: string;
  servings: number;

  constructor(title: string, servings: number) {
    this.title = title;
    this.servings = servings;
  }
}

interface mealPlannerProps {

}

export function MealPlanner(props: mealPlannerProps): React.ReactElement {
  const [servings, setServings] = React.useState<number>(1);


  return (
    <div>
      <div>
        <DayBox dayName='Sunday' breakfast={[]} lunch={[]} dinner={[]} prep={[]} />
      </div>
      <div>
        <DayBox dayName='Monday' breakfast={[]} lunch={[]} dinner={[]} prep={[]} />
      </div>
      <div>
        <DayBox dayName='Tuesday' breakfast={[]} lunch={[]} dinner={[]} prep={[]} />
      </div>
      <div>
        <DayBox dayName='Wednesday' breakfast={[]} lunch={[]} dinner={[]} prep={[]} />
      </div>
      <div>
        <DayBox dayName='Thursday' breakfast={[]} lunch={[]} dinner={[]} prep={[]} />
      </div>
      <div>
        <DayBox dayName='Friday' breakfast={[]} lunch={[]} dinner={[]} prep={[]} />
      </div>
      <div>
        <DayBox dayName='Saturday' breakfast={[]} lunch={[]} dinner={[]} prep={[]} />
      </div>
    </div>
  );
}

interface expandingListProps {
  options: string[];
  onUpdate: (meals: Meal[]) => void
}

export function ExpandingList(props: expandingListProps): React.ReactElement {
  const [meals, setMeals] = React.useState<Meal[]>([]);
  // let titleAry = [recipeJSONBreaded.title, recipeJSONGrilledCheese.title]

  // console.log(meals);
  return (
    <div >

      <div className="grid-container">
        <div className="grid-item">
          Title:
        </div>
        <div className="grid-item">
          Servings:
        </div>
        {
          meals.map
            (
              (item, index) => <Fragment key={"fragment" + index} >
                <div style={{ gridRow: 2 + index }} className="grid-item" key={"recipenames" + index}>
                  <select value={item.title} name="recipe" id={"reipceSelector" + index} key={"recipenameliteral" + index}
                    onChange={(e) => {
                      let newState = meals.slice();
                      newState[index].title = e.target.value;
                      props.onUpdate(newState);
                      setMeals(newState);
                    }}>
                    <option disabled value={""}>-- select an option --</option>
                    {props.options.map(
                      (option) =>
                        <option key={option} value={option}>{option}</option>
                    )}
                  </select>
                </div>
                <div style={{ gridRow: 2 + index }} className="grid-item" key={"numinput" + index}>
                  <input key={"servings" + index} type="number" value={item.servings} className="numbox"
                    onChange={(e) => {
                      let numVal = parseInt(e.target.value);
                      if (!isNaN(numVal)) {
                        let newState = meals.slice();
                        newState[index].servings = parseInt(e.target.value);
                        props.onUpdate(newState);
                        setMeals(newState);
                      }
                    }}
                  ></input>
                </div>
                <div style={{ gridRow: 2 + index }} className="grid-item" key={"removediv" + index}>
                  <button className="grid-item meal-button" type="button" onClick={(e) => {
                    let newState = meals.slice();
                    newState.splice(index, 1);
                    props.onUpdate(newState);
                    setMeals(newState);
                  }}>Remove</button>
                </div>
              </Fragment>
            )
        }
      </div>
      <button className="meal-button" type="button" onClick={(e) => {
        let newState = meals.slice();
        newState.push(new Meal("", 0));
        props.onUpdate(newState);
        setMeals(newState);
      }}>Add Meal</button>

    </div >
  );
}


interface newDayBoxProps {
  recipes: Recipe[];
}

export function WeekRecipes(props: newDayBoxProps): React.ReactElement {
  const [groceryList, setGroceryList] = React.useState<Ingredient[]>([]);
  const [weeklyMeals, setWeeklyMeals] = React.useState<Meal[][][]>([[], [], [], [], [], [], []]);

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let mealsOfTheDay = ["Breakfast", "Lunch", "Dinner"]
  // let weeklyMeals: Meal[][][] = [[], [], [], [], [], [], []]
  //set the recipes up for success
  console.log(groceryList)

  return (
    <div>
      <div className='flex-container'>
        {
          days.map
            (
              (day, dayIndex) =>
                <div className='mealBox' key={dayIndex + " " + day + "days"}>
                  <div className="dayHeader">
                    {day}
                  </div>
                  {
                    mealsOfTheDay.map(
                      (mealSlot, mealIndex) =>
                        <div key={mealIndex + " " + mealSlot + " meal item"}>
                          <div className='mealHeader'>
                            {mealSlot}
                          </div>
                          <ExpandingList onUpdate={(updatedState) => {
                            weeklyMeals[dayIndex][mealIndex] = updatedState;
                            let newState = weeklyMeals.slice();
                            newState[dayIndex][mealIndex] = updatedState;
                            setWeeklyMeals(newState);
                            // console.log(weeklyMeals)
                          }} options={props.recipes.map(
                            (meal) => meal.title
                          )}
                          ></ExpandingList>
                        </div>
                    )
                  }
                </div>
            )
        }
      </div>
      <button className="meal-button" type="button" onClick={(e) => {
        let flattenedMeals = weeklyMeals.flat(2);
        console.log(flattenedMeals)
        let newGroceryList: Ingredient[] = []

        for (let meal of flattenedMeals) {
          let desiredRecipe = props.recipes.find(r => r.title === meal.title);
          let desiredAmount = meal.servings;
          console.log(desiredAmount)
          if (desiredRecipe) {
            for (let ingredient of desiredRecipe.ingredients) {
              let foundIngredient = newGroceryList.find(
                (currIngredient) => currIngredient.name === ingredient.name
              )
              if (foundIngredient) {
                foundIngredient.amount += desiredAmount * ingredient.amount;
              } else {
                newGroceryList.push(ingredient.scaleAmount(desiredAmount))
              }
            }
          }
        }
        setGroceryList(newGroceryList)

      }}>
        Generate Grocery List</button>
      <div id="groceryList">{groceryList.map(
        (ingredient, index) => <div key={ingredient.name + index}>
          {ingredient.amount + " " + ingredient.unit + " " + ingredient.name}
        </div>
      )}</div>
    </div>
  );
}

interface dayBoxProps {
  dayName: string;
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  prep: Meal[];
}

export function DayBox(props: dayBoxProps): React.ReactElement {
  const [servings, setServings] = React.useState<number>(1);

  return (
    <div>
      <div >
        Day: {props.dayName}
      </div>
      <div>
        Breakfast:
        {
          props.breakfast.map
            (
              (item, index) => <p> {item.title} {item.servings} servings </p>
            )
        }

      </div>
      <div>
        Lunch
        {
          props.lunch.map
            (
              (item, index) => <p> {item.title} {item.servings} servings </p>
            )
        }
      </div>
      <div>
        Dinner:
        {
          props.dinner.map
            (
              (item, index) => <p> {item.title} {item.servings} servings </p>
            )
        }
      </div>
      <div>
        Prep:
        {
          props.prep.map
            (
              (item, index) => <p> {item.title} {item.servings} servings </p>
            )
        }
      </div>
    </div>

  );
}