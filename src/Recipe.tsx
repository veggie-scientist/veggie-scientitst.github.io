/**
 * show on button click --> https://bobbyhadz.com/blog/react-onclick-show-component
 */
import React, { ChangeEvent } from 'react';
import './App.css';

interface ingredientObj {
  name: string;
  amount: number;
  unit: string;
}

export class Ingredient {

  name: string;  //eg cHIECKEN
  amount: number;  //eg 1
  unit: string;  //eg cup

  constructor(name: string, amount: number, unit: string) {
    this.name = name
    this.amount = amount
    this.unit = unit
  }

  scaleAmount(amount: number): Ingredient {
    return new Ingredient(this.name, this.amount * amount, this.unit)
  }



  toJSON(): string {
    let ingredientObject = {
      name: this.name,
      amount: this.amount,
      unit: this.unit
    }
    return JSON.stringify(ingredientObject)
  }

  static parseJSON(obj: ingredientObj): Ingredient {
    return new Ingredient(obj.name, obj.amount, obj.unit);
  }
}

interface materialObject {
  name: string;
  amount: number;
}

export class Material {
  name: string;
  amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  toJSON(): string {
    let materialObject = {
      name: this.name,
      amount: this.amount
    }
    return JSON.stringify(materialObject)
  }

  static parseJSON(obj: materialObject): Material {
    return new Material(obj.name, obj.amount);
  }
}

interface videoProps {
  videoString: string;
  key: number;
  videoTranscript: string;
}
function Video(props: videoProps): React.ReactElement {
  const [isShown, setIsShown] = React.useState(false);

  const handleClick = () => {
    setIsShown(current => !current);
  };

  let content = null

  if (props.videoString != "") {
    content = <div >
      <button onClick={handleClick}>Show Video and Transcript</button>
      {/*show component on click */}
      {isShown}
    </div>

    if (isShown) {
      content =
        <div>
          <div >
            <button onClick={handleClick}>Show Video and Transcript</button>
            {/* show component on click */}
            {isShown}
          </div>
          <div className='video'>
            <iframe width="560" height="315" src={props.videoString}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
            <p>
              {props.videoTranscript}
            </p>
          </div>
        </div>
    }
  }

  return <div>
    {content}
  </div>
}


interface recipeObj {
  videoTranscripts: string[];
  materials: materialObject[];
  videos: string[];
  instructions: string[];
  cookTime: number;
  prepTime: number;

  calorieCount: number;
  title: string;
  ingredients: ingredientObj[];
  originalRecipe: string;
}

export class Recipe {
  ingredients: Ingredient[];
  title: string;
  calorieCount: number;
  prepTime: number;
  cookTime: number;
  instructions: string[];
  videos: string[];
  materials: Material[];
  videoTranscripts: string[];
  originalRecipe: string;

  constructor(ingredients: Ingredient[], title: string,
    calorieCount: number, prepTime: number,
    cookTime: number, instructions: string[],
    videos: string[], materials: Material[],
    videoTranscripts: string[], originalRecipe:string) {

    this.ingredients = ingredients;
    this.title = title;
    this.calorieCount = calorieCount;
    this.prepTime = prepTime;
    this.cookTime = cookTime;
    this.instructions = instructions;
    this.videos = videos;
    this.materials = materials;
    this.videoTranscripts = videoTranscripts;
    this.originalRecipe = originalRecipe;
  }

  toJSON(): string {
    let recipeObject = {
      title: this.title,
      ingredients: this.ingredients.map(
        (ingredient) => {
          return {
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit
          }
        }
      )
    }
    return JSON.stringify(recipeObject);
  }

  static parseJSON(obj: recipeObj): Recipe {
    return new Recipe(
      obj.ingredients.map(
        (ing) =>
          Ingredient.parseJSON(ing)
      ),
      obj.title,
      obj.calorieCount,
      obj.prepTime,
      obj.cookTime,
      obj.instructions,
      obj.videos,
      obj.materials.map(
        (mat) =>
          Material.parseJSON(mat)
      ),
      obj.videoTranscripts,
      obj.originalRecipe
    );
  }
}


interface recipeProps {
  recipe: Recipe;
  imagePath: string;
}



export function RecipeCard(props: recipeProps): React.ReactElement {
  const [servings, setServings] = React.useState<number>(1);



  return (
    <div>
      <div >
        <div className='title'>
          {props.recipe.title}
        </div>
        <div>
          <img src={props.imagePath} />
          <div>
            Original Recipe and Image Source: {props.recipe.originalRecipe}
          </div>
        </div>
        <div>
          <span id="content1">
            Calories per Serving: {props.recipe.calorieCount}
          </span>
          <span id="content1">
            Preparation time: {props.recipe.prepTime}
          </span>
          <span id="content1">
            Cook Time: {props.recipe.cookTime}
          </span>
        </div>
        <label htmlFor="servingInput">Servings:</label>
        <input type="number" id="servingInput" value={servings}
          onChange={(e) => setServings(parseInt(e.target.value))}
        >
        </input>

      </div>
      <div>
        <span id="content3" className="reicpeHeader">
          Materials
        </span>
        <ul>
          {

            props.recipe.materials.map
              (
                (item, index) => <li id="content1" key={item + "" + index}> {item.amount} {item.name} </li>
              )
          }
        </ul>
        <span id="content3" className="reicpeHeader">
          Ingredients
        </span>
        <ul>
          {
            props.recipe.ingredients.map
              (
                (item, index) => <li id="content1" key={item + "" + index}> {item.amount * servings} {item.unit} {item.name} </li>
              )
          }
        </ul>
      </div>
      <div>
        <span id="content2" className="reicpeHeader">
          Instructions:
          <div>
            <div>

            </div>
          </div>
        </span>
        {
          props.recipe.instructions.map
            (
              (item, index) =>
                <span key={"span0" + index}>

                  <span className='step' id="content1" key={item + "" + index}>Step {index + 1} </span>
                  <span key={"span1" + index}>
                    {item}
                  </span>
                  <div key={"div" + index}>
                    <Video key={index} videoString={props.recipe.videos[index]} videoTranscript={props.recipe.videoTranscripts[index]} />
                  </div>

                </span>
            )
        }
      </div>
    </div>
  );
}



